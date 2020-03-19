import React from "react";
import PropTypes from "prop-types";
import { Field, FieldArray } from 'formik';

const ResultsTableHeader = (props) => (
  <div className="ResultsTableHeader">
    <div className="flex flex-row flex-no-wrap mb-3">
      <div className="w-1/5 text-center">+/-</div>
      <div className="w-3/5">Player</div>
      <div className="w-1/5 text-center">Winner</div>
    </div>
  </div>
);

const ResultsTableRow = (props) => {
  const playersAvailable = [...props.players].filter((player) => (
    player.id === 0 ||
    player.id === parseInt(props.playerSelected) ||
    !props.playersSelected.includes(player.id)
  ));
  const errors = (props.errors === undefined) ? {} : props.errors;

  return (
    <div className="ResultsTableRow">
      <div className="flex flex-row flex-no-wrap mb-2">
        <div className="w-1/5 text-center">
          {props.index === 0
            ? <span className="text-gray-500">-</span>
            : <button className="text-red-500" type="button" onClick={() => props.onRemove(props.index)}>-</button>
          }
        </div>
        <div className="w-3/5">
          <div className="relative">
            <Field as="select" name={`results[${props.index}].player_id`} className="
              block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline
            " required>
              <option disabled value={0}>Select a Player</option>
              {playersAvailable.map((player, index) =>
                <option key={index} value={player.id}>{player.nickname}</option>
              )}
            </Field>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p className={`
            ${(errors.player_id) ? '' : 'hidden'}
            text-red-500 text-xs italic mt-3
          `}>{errors.player_id}</p>
        </div>
        <div className="w-1/5 text-center">
          <Field type="checkbox" name={`results[${props.index}].winner`} />
        </div>
      </div>
    </div>
  );
};

const ResultsTableRowAdd = (props) => (
  <div className="ResultsTableFooter">
    <div className="flex flex-row flex-no-wrap">
      <div className="w-1/5 text-center text-green-500 font-medium">
        <button type="button" onClick={() => props.onAdd({player_id: 0, winner: false})}>
          +
        </button>
      </div>
      <div className="w-4/5"></div>
    </div>
  </div>
);

const ResultsTable = (props) => {
  const playersSelected = props.value.map(v => parseInt(v.player_id));
  const errors = (props.errors === undefined) ? [] : props.errors;

  return (
    <div className="ResultsTable
      flex flex-col
      h-full
    ">
      <h3 className="w-full flex-grow-0 text-sm font-medium">Match Results</h3>
      <div className="flex flex-col flex-no-wrap">
        <ResultsTableHeader />
        <FieldArray
          name="results"
          render={arrayHelpers => (
            <div className="ResultsTableBody">
              {props.value.map((result, index) =>
                <ResultsTableRow key={index}
                  index={index}
                  players={props.players}
                  playersSelected={playersSelected}
                  playerSelected={result.player_id}
                  errors={errors[index]}
                  onRemove={arrayHelpers.remove} />
              )}
              <ResultsTableRowAdd onAdd={arrayHelpers.push} />
            </div>
          )}
        />
      </div>
    </div>
  );
};

ResultsTable.propTypes = {
  players: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
  errors: PropTypes.array.isRequired
};

export default ResultsTable
