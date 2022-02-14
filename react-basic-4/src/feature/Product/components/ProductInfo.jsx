import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { formatPrice } from '../../../utils/common';

const useStyles = makeStyles((theme) => ({
  root: {},

  description: {
    margin: theme.spacing(2, 0),
  },

  salePrice: {
    fontSize: theme.typography.h3.fontSize,
    marginRight: theme.spacing(2),
    fontWeight: 'bold',
  },

  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through',
  },

  promotionPercent: {},

  priceBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[300],
  },
}));

ProductInfo.propTypes = {
  product: PropTypes.func,
};

function ProductInfo({ product }) {
  const classes = useStyles();

  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>

        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" className={classes.promotionPercent}>
              {`-${promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
