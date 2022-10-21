import React from 'react';
import { FormikValues, useFormik } from 'formik';

// Create empty context
const FormikContext = React.createContext({});

// Place all of what’s returned by useFormik into context
export const Formik = ({ children, ...props }: FormProps) => {
  const formikStateAndHelpers = useFormik({
    initialValues: props,
    onSubmit: (values: any) => alert(JSON.stringify(values, null, 2)),
  });
  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === 'function' ? children(formikStateAndHelpers) : children}
    </FormikContext.Provider>
  );
};

interface FormProps {
  children: any;
  props: FormikValues;
}
