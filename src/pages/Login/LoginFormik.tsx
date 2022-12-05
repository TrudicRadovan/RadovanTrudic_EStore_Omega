import React, { useState } from 'react';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import './Login.css';
import { Box, Grid, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import State from '../../interfaces/State';
import useLogin from '../../hooks/useLogin';

const LoginFormik = () => {
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const { login } = useLogin();

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        email: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        login(values.email, values.password);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
            <TextField
              fullWidth
              id="email"
              type="text"
              placeholder="Email"
              {...formik.getFieldProps('email')}
              sx={{ marginBottom: 1, input: { color: 'white', fontSize: 16 } }}
            />
            <Grid item container spacing={0} direction="row" justifyContent="flex-start" alignItems="center">
              {formik.touched.email && formik.errors.email ? (
                <Box sx={{ paddingBottom: 1, fontSize: 13, color: 'white' }}>{formik.errors.email}</Box>
              ) : null}
            </Grid>

            <OutlinedInput
              required
              id="password"
              placeholder="Password"
              type={values.showPassword ? 'text' : 'password'}
              sx={{ marginBottom: 1, color: 'white', maxWidth: 300, fontSize: 16 }}
              {...formik.getFieldProps('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Grid item container spacing={0} direction="row" justifyContent="flex-start" alignItems="center">
              {formik.touched.password && formik.errors.password ? (
                <Box sx={{ paddingBottom: 1, fontSize: 13, color: 'white' }}>{formik.errors.password}</Box>
              ) : null}
            </Grid>
            <Button color="primary" variant="contained" fullWidth type="submit">
              SIGN IN
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default LoginFormik;
