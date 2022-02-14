import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  onChange: PropTypes.func,
  currentSort: PropTypes.string,
};

function ProductSort({ onChange, currentSort }) {
  const handleChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs value={currentSort} indicatorColor="primary" textColor="primary" onChange={handleChange}>
      <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá cao xuống thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
