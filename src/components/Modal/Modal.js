import React from "react";
import { connect } from 'react-redux';

import { modalActions } from '../../redux/actions'
import IconCheckCircle from '../Icons/IconCheckCircle';
import IconXCircle from '../Icons/IconXCircle';
import IconExclamation from '../Icons/IconExclamation';
import IconInformation from '../Icons/IconInformation';

const Modal = (props) => {
  return (
    <div className={`Modal
      ${props.modalProps.className}
      ${props.isOpen ? '' : 'hidden'}
      flex flex-row items-center content-center justify-center
      fixed top-0 left-0 z-50
      h-screen w-screen 
    `}>
      <div className="
        absolute w-full h-full bg-black opacity-50 z-0
      " />
      <div className="
        flex flex-col
        max-w-3/4 max-h-3/4
        pt-6 pb-3 px-24
        overflow-y-auto
        bg-white rounded z-10 shadow
        text-center
      ">
        <div className="p-2 text-4xl">
          {
            props.modalProps.type === "success" ? (
              <IconCheckCircle className="
                h-16 w-16
                mx-auto
                text-green-500 fill-current
              " viewBox="0 0 24 24" />
            ) : props.modalProps.type === "error" ? (
              <IconXCircle className="
                h-16 w-16
                mx-auto
                text-red-500 fill-current
              " viewBox="0 0 24 24" />
            ) : props.modalProps.type === "warning" ? (
              <IconExclamation className="
                h-16 w-16
                mx-auto
                text-yellow-500 fill-current
              " viewBox="0 0 24 24" />
            ) : (
              <IconInformation className="
                h-16 w-16
                mx-auto
                text-blue-500 fill-current
              " viewBox="0 0 24 24" />
            )
          }
          <h1>{props.modalProps.header}</h1>
        </div>
        <div className="flex-grow p-3">{props.modalProps.body}</div>
        <div className="flex-initial flex flex-row-reverse justify-around p-2">
          {
            props.modalProps.onContinue ? (
              <button className="
                py-1 px-12 border rounded-full
                bg-green-400 border-green-400
                hover:bg-green-700 hover:border-green-700
                text-white
              " onClick={props.modalProps.onContinue}>Continue</button>
            ) : (
              null
            )
          }
          <button className="
            py-1 px-12 border rounded-full
            bg-gray-400 border-gray-400
            hover:bg-gray-700 hover:border-gray-700
            text-gray-700 hover:text-gray-900
          " onClick={() => {props.close()}}>Close</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return Object.assign({}, state.modalReducer);
};

const mapDispatchToProps = (dispatch) => (
  {
    close: () => (dispatch(modalActions.close()))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
