/* eslint-disable */
import { Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, Paper } from '@mui/material';
import React, { useState } from 'react';
import './Login.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import State from '../../interfaces/State';
import useLogin from '../../hooks/useLogin';
import LoginFormik from './LoginFormik';

const Login = () => {
  const [value, setValue] = useState('');
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });
  // const { login } = useLogin(value, values.password);

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
    <div className="login">
      <Paper
        sx={{
          borderRadius: 5,
          paddingTop: 7,
          paddingBottom: 7,
          margin: 'auto',
          maxWidth: 500,
          minHeight: 500,
          flexGrow: 1,
          backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#00bbff'),
        }}
      >
        <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <IconButton>
              <AccountCircleIcon sx={{ color: 'white', height: 100, width: 100 }} />
            </IconButton>
          </Grid>
          <Grid item>
            <div>
              <h3 style={{ color: 'white' }}>Please enter your credentials</h3>
            </div>
          </Grid>
          <Grid item>
            <LoginFormik></LoginFormik>
          </Grid>
          <Grid item container direction="row" justifyContent="center" alignItems="center">
            <Grid item>
              <div>
                <h4 style={{ color: 'white' }}>Don't have an account?</h4>
              </div>
            </Grid>
            <Grid item>
              <div className="links">
                <Link to="/login">Sign up now</Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
