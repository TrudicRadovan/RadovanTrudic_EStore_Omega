import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const instance = axios.create({
  baseURL: 'https://dummyjson.com',
});

const AxiosInterceptor = ({ children }: any) => {
  const [isSet, setIsSet] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const resInterceptor = ({ response }: any) => {
      return response;
    };

    const errInterceptor = (error: any) => {
      console.log(error?.response?.status);
      if (error?.response?.status == 404) {
        navigate('/login');
      }
      return Promise.reject(error);
    };

    const interceptor = instance.interceptors.response.use(resInterceptor, errInterceptor);

    setIsSet(true);
    return () => instance.interceptors.response.eject(interceptor);
  });
  return isSet && children;
};

export default instance;
export { AxiosInterceptor };
