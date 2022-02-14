import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { default as React } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityFileds from '../../../components/form-controls/QuantityFilelds';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter your quantity')
      .min(1, 'Please enter at least 1')
      .typeError('Please enter a number'),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) await onSubmit(values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityFileds name="quantity" label="Quantity" form={form} />

      <Button type="submit" variant="contained" color="primary" fullWidth size="large" style={{ width: '250px' }}>
        Chọn mua
      </Button>
    </form>
  );
}

export default AddToCartForm;
