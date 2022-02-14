import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import productApi from '../../../api/productApi';
import FilterViewer from '../components/FilterViewer';
import ProductList from '../components/ProducList';
import ProductFilter from '../components/ProductFilter';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',

    marginTop: '20px',
    paddingBottom: '30px',
  },
}));

Listpage.propTypes = {};

function Listpage(props) {
  const classes = useStyles();

  const location = useLocation();
  const history = useHistory();

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [filter, setFilters] = useState({
  //   _page: 1,
  //   _limit: 9,
  //   _sort: 'salePrice:ASC',
  // });

  // const [filter, setFilters] = useState(() => ({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams.limit) || 9,
  //   _sort: queryParams.sort || 'salePrice:ASC',
  // }));

  // useEffect(() => {
  // TODO: Sync filters to URL

  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filter),
  //   });
  // }, [history, filter]);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 10,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fectch product list: ', error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (event, page) => {
    // setFilters((preFilter) => ({
    //   ...preFilter,
    //   _page: page,
    // }));

    const filters = { ...queryParams, _page: page };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newSortValue) => {
    // setFilters((preFilter) => ({
    //   ...preFilter,
    //   _sort: newSortValue,
    // }));
    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFilterChange = (newFilters) => {
    // setFilters((preFilters) => ({
    //   ...preFilters,
    //   ...newFilters,
    // }));

    const filters = {
      ...queryParams,
      ...newFilters,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const setNewFilters = (newFilters) => {
    console.log('New filters: ', newFilters);
    // setFilters(newFilters);
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilter filters={queryParams} onChange={handleFilterChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
              <FilterViewer filters={queryParams} onChange={setNewFilters} />
              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}

              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Listpage;
