import React from "react";
import PropTypes from "prop-types";
import { Formik } from 'formik';
import { NavLink } from "react-router-dom";

import SignupSchema from './SignupSchema';
import logo from '../../assets/logo.png';

const Signup = (props) => (
  <div className="Signup
    flex flex-col items-center justify-center
    h-screen w-full overflow-y-auto
    bg-gray-700
  ">
    <div className="
      flex flex-col items-center justify-center
      p-6 m-6
      w-1/2
      bg-white rounded shadow-xl
    ">
      <img src={logo} className="logo h-32 pb-6" alt="logo" />
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          email: props.email,
          password: props.password,
          password_confirmation: props.password_confirmation,
          nickname: props.nickname,
          first_name: props.first_name,
          last_name: props.last_name
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
            <div className="flex flex-row flex-wrap justify-around">
              <div className="mb-4 w-full md:w-1/2 pr-0 md:pr-3">
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
              <div className="mb-4 w-full md:w-1/2 pr-0 md:pl-3">
                <input type="text" id="nickname" placeholder="Nickname" required
                  className="
                    shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline
                  " value={values.nickname} onChange={handleChange} onBlur={handleBlur} />
                  <p className={`
                    ${(touched.nickname && errors.nickname) ? '' : 'hidden'}
                    text-red-500 text-xs italic mt-3
                  `}>{errors.nickname}</p>
              </div>
              <div className="mb-4 w-full md:w-1/2 pr-0 md:pr-3">
                <input type="password" id="password" placeholder="Password" required
                  className="
                    shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline
                  " value={values.password} onChange={handleChange} onBlur={handleBlur} />
                  <p className={`
                    ${(touched.password && errors.password) ? '' : 'hidden'}
                    text-red-500 text-xs italic mt-3
                  `}>{errors.password}</p>
              </div>
              <div className="mb-4 w-full md:w-1/2 pr-0 md:pl-3">
                <input type="password" id="password_confirmation" placeholder="Password Confirmation" required
                  className="
                    shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline
                  " value={values.password_confirmation} onChange={handleChange} onBlur={handleBlur} />
                  <p className={`
                    ${(touched.password_confirmation && errors.password_confirmation) ? '' : 'hidden'}
                    text-red-500 text-xs italic mt-3
                  `}>{errors.password_confirmation}</p>
              </div>
              <div className="mb-4 w-full md:w-1/2 pr-0 md:pr-3">
                <input type="text" id="first_name" placeholder="First Name" required
                  className="
                    shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline
                  " value={values.first_name} onChange={handleChange} onBlur={handleBlur} />
                  <p className={`
                    ${(touched.first_name && errors.first_name) ? '' : 'hidden'}
                    text-red-500 text-xs italic mt-3
                  `}>{errors.first_name}</p>
              </div>
              <div className="mb-4 w-full md:w-1/2 pr-0 md:pl-3">
                <input type="text" id="last_name" placeholder="Last Name" required
                  className="
                    shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline
                  " value={values.last_name} onChange={handleChange} onBlur={handleBlur} />
                  <p className={`
                    ${(touched.last_name && errors.last_name) ? '' : 'hidden'}
                    text-red-500 text-xs italic mt-3
                  `}>{errors.last_name}</p>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <button className="
                bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded
                focus:outline-none focus:shadow-outline
              " disabled={isSubmitting} type="submit">
                Sign Up
              </button>
            </div>
          </form>
        )}
      </Formik>
      <div className="flex flex-row flex-no-wrap items-center w-full py-3">
        <hr className="flex-grow bt-1" />
        <span className="flex-grow-0 px-3">OR</span>
        <hr className="flex-grow bt-1" />
      </div>
      <div className="w-full text-center">
        <NavLink to="/login">Log In</NavLink>
      </div>
    </div>
  </div>
);

Signup.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password_confirmation: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Signup
