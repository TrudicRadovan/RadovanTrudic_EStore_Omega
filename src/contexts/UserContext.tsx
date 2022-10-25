import React, { createContext, useEffect, useState } from 'react';

function getInitialState() {
  const initialState = localStorage.getItem('user');
  return initialState ? JSON.parse(initialState) : null;
}

const UserContext = createContext<any>(getInitialState);

const UserContextProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state));
  }, [state]);

  return <UserContext.Provider value={{ setState, state }}>{children}</UserContext.Provider>;
};

export { UserContext as default, UserContextProvider };
