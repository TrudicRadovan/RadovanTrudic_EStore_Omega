import { Avatar, Grid, Paper } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './UserProfile.css';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

const UserProfile = () => {
  const { setState, state } = useContext<{ setState: any; state: any }>(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state == null) {
      navigate('/login');
    }
  }, []);

  /*
  <div className="user-profile">
      {state && (
        <div>
          <h1>User Profile</h1>
          <img src={state.image}></img>
          <h3>Name: {state.firstName}</h3>
          <h3>Lastname: {state.lastName}</h3>
          <h3>Email: {state.email}</h3>
          <h3>Gender: {state.gender}</h3>
        </div>
      )}
    </div>
  */

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
          backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#e8f9ff'),
        }}
      >
        <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <Avatar src={state.image} sx={{ width: 200, height: 200, border: 10, borderColor: '#00bbff' }} />
          </Grid>
          <Grid item>
            <h2>{`${state.firstName} ${state.lastName}`}</h2>
          </Grid>
          <Grid item>
            <h3>{state.email}</h3>
          </Grid>
          <Grid item>
            {state.gender === 'female' ? (
              <FemaleIcon fontSize="large"></FemaleIcon>
            ) : (
              <MaleIcon fontSize="large"></MaleIcon>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserProfile;
