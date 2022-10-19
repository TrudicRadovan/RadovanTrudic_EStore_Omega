import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import Login from '../Login/Login';
import './UserProfile.css';

const UserProfile = () => {
  const { setState, state } = useContext<{ setState: any; state: any }>(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.id === 0) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <img src={state.image}></img>
      <h3>Name: {state.firstName}</h3>
      <h3>Lastname: {state.lastName}</h3>
      <h3>Email: {state.email}</h3>
      <h3>Gender: {state.gender}</h3>
    </div>
  );
};

export default UserProfile;
