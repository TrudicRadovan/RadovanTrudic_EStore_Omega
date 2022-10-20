/*import axios from 'axios';
import { createContext, useEffect, useRef } from 'react';

const AxiosContext = createContext(null);
const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}: {
  config: any;
  requestInterceptors: any;
  responseInterceptors: any;
  children: JSX.Element | JSX.Element[];
}) => {
  const instanceRef = useRef(axios.create(config));

  useEffect(() => {
    requestInterceptors.forEach((interceptor: any) => {
      instanceRef.current.interceptors.request.use(interceptor);
    });
    responseInterceptors.forEach((interceptor: any) => {
      instanceRef.current.interceptors.response.use(interceptor);
    });
  }, []);

  return <AxiosContext.Provider value={instanceRef.current}>{children}</AxiosContext.Provider>;
};*/

const AxiosContext = () => {
  return <div className="aaa"></div>;
};

export default AxiosContext;
