import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
import PropTypes from 'prop-types';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register({ closeDialog }) {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      // Auto set username = email
      values.username = values.email;

      console.log('Form submit: ', values);

      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      enqueueSnackbar('Register successfully!', { variant: 'success' });

      if (closeDialog) closeDialog();
    } catch (error) {
      console.log('Failed to register', error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
