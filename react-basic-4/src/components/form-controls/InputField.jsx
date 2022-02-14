import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object,
  name: PropTypes.string,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const { control } = form;

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <TextField
            id="outlined-error-helper-text"
            label={label}
            defaultValue=""
            variant="outlined"
            onChange={onChange}
            onBlur={onBlur}
            error={invalid}
            helperText={error?.message}
            fullWidth
            margin="normal"
          />
        )}
      />
    </div>
  );
}

export default InputField;
