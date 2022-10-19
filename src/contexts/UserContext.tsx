import React, { createContext, useState } from 'react';

const initialState = {
  email: '',
  firstName: '',
  gender: '',
  id: 0,
  image: '',
  lastName: '',
  token: '',
  username: '',
};

const UserContext = createContext<any>(initialState);

const UserContextProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [state, setState] = useState(initialState);

  return <UserContext.Provider value={{ setState, state }}>{children}</UserContext.Provider>;
};

export { UserContext as default, UserContextProvider };
