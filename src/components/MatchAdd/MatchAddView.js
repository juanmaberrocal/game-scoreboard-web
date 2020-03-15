import React from "react";
import PropTypes from "prop-types";
import { Field, Formik } from 'formik';
import { NavLink } from "react-router-dom";

import Breadcrumb from '../Breadcrumb';
import MatchAddSchema from './MatchAddSchema';
import ResultsTable from './ResultsTable';

const MatchAdd = (props) => {
  const crumbs = [
    ['Home', '/'],
    ['Add Result', '/matches/add']
  ];

  return (
    <div className="
      flex flex-col
      p-3 md:px-16 md:py-8
    ">
      <Breadcrumb crumbs={crumbs} />
      <div className="MatchAdd
        flex flex-row flex-wrap
        h-full w-full
      ">
        <Formik
          validationSchema={MatchAddSchema}
          initialValues={{
            game_id: props.game_id,
            results: props.results
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
            <form onSubmit={handleSubmit} className="
              p-6 w-full bg-white rounded shadow-xl
            " noValidate>
              <div className="flex flex-col flex-wrap justify-around">
                <div className="mb-4 w-full">
                  <div className="relative">
                    <select name="game_id" className="
                        block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline
                      " value={values.game_id} onChange={handleChange} onBlur={handleBlur} required>
                      <option disabled value={0}>Select a Game</option>
                      {props.games.map((game, index) =>
                        <option key={index} value={game.id}>{game.name}</option>
                      )}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  <p className={`
                    ${(touched.game_id && errors.game_id) ? '' : 'hidden'}
                    text-red-500 text-xs italic mt-3
                  `}>{errors.game_id}</p>
                </div>
                <div className="mb-4 w-full">
                  <Field as={ResultsTable} name="results" errors={errors.results} />
                  <p className={`
                    ${(touched.results && errors.results) ? '' : 'hidden'}
                    text-red-500 text-xs italic mt-3
                  `}>{
                    typeof errors.results === 'string' ? errors.results : null
                  }</p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <button className="
                  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded
                  focus:outline-none focus:shadow-outline
                " disabled={isSubmitting} type="submit">
                  Save
                </button>
                <NavLink className="
                  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded
                  focus:outline-none focus:shadow-outline
                " to="/">
                  Cancel
                </NavLink>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

MatchAdd.propTypes = {
  game_id: PropTypes.number.isRequired,
  games: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default MatchAdd
