import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function useLogin(): { login: (username: string, password: string) => void } {
  const { setState, state } = useContext<{ setState: any; state: any }>(UserContext);

  const navigate = useNavigate();

  const login = (username: string, password: string) =>
    fetch(process.env.REACT_APP_API_LOGIN as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource.');
        }
        return res.json();
      })
      .then(res => {
        console.log(res);
        setState(res);
        localStorage.setItem('user', res.token);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        alert('Incorect username or password. Please try again.');
      });

  return { login };
}
