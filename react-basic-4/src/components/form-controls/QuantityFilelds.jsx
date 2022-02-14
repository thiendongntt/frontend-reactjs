import { Box, FormControl, FormHelperText, IconButton, InputLabel, makeStyles, OutlinedInput } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import { mergeClasses } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {},

  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    maxWidth: '250px',
  },
}));

QuantityFileds.propTypes = {
  form: PropTypes.object,
  name: PropTypes.string,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function QuantityFileds(props) {
  const classes = useStyles();

  const { form, name, label, disable } = props;
  const { control, setValue } = form;

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
          <Box className={classes.box}>
            <IconButton onClick={() => setValue(name, Number.parseInt(value) - 1)}>
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
            <FormControl fullWidth variant="outlined" margin="normal" size="small">
              <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="number"
                label={label}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={invalid}
                labelWidth={70}
              />
              <FormHelperText error={invalid}>{error?.message}</FormHelperText>
            </FormControl>
            <IconButton onClick={() => setValue(name, Number.parseInt(value) + 1)}>
              {' '}
              <AddCircleIcon />
            </IconButton>
          </Box>
        )}
      />
    </div>
  );
}

export default QuantityFileds;
