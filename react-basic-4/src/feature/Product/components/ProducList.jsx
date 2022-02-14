import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Product from './Product';

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            {/* <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box> */}
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
