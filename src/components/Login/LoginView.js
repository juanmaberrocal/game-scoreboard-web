import React from "react";
import PropTypes from "prop-types";
import { Formik } from 'formik';

import LoginSchema from './LoginSchema';
import logo from '../../assets/logo.png';

const Login = (props) => (
  <div className="Login
    flex flex-column items-center justify-center
    h-screen w-full overflow-y-auto
    bg-gray-700
  ">
    <div className="
      flex flex-column items-center justify-center
      p-6 m-6
      bg-white rounded shadow-xl
    ">
      <img src={logo} className="logo h-32 pb-6" alt="logo" />
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          email: props.email,
          password: props.password
        }}
        onSubmit={props.onSubmit}
      >
        {({
          isSubmitting,
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <input type="email" id="email" placeholder="Email" required
                className="
                  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-outline
                " value={values.email} onChange={handleChange} onBlur={handleBlur} />
                <p className={`
                  ${(touched.email && errors.email) ? '' : 'hidden'}
                  text-red-500 text-xs italic mt-3
                `}>{errors.email}</p>
            </div>
            <div className="mb-6">
              <input type="password" id="password" placeholder="Password" required
                className="
                  shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight 
                  focus:outline-none focus:shadow-outline
                " value={values.password} onChange={handleChange} onBlur={handleBlur} />
                <p className={`
                  ${(touched.password && errors.password) ? '' : 'hidden'}
                  text-red-500 text-xs italic mt-3
                `}>{errors.password}</p>
            </div>
            <div className="flex justify-center">
              <button className="
                bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded
                focus:outline-none focus:shadow-outline
              " disabled={isSubmitting} type="submit">
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Login
