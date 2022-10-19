import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetDataReturnType } from '../types/GetDataReturnType';

export default function login(url: string, username: string, password: string): GetDataReturnType {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
        setLoading(false);
        setError(null);
        console.log('Login successed!');
      })
      .catch(err => {
        setData(null);
        setLoading(false);
        setError(err.message);
        console.log(err);
      });
  }, [url]);

  return { data, loading, error };
}
