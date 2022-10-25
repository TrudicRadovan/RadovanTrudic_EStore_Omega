import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './UserProfile.css';

const UserProfile = () => {
  const { setState, state } = useContext<{ setState: any; state: any }>(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state == null) {
      navigate('/login');
    }
  }, []);

  return (
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
  );
};

export default UserProfile;
