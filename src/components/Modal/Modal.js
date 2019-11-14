import React from "react";
import { connect } from 'react-redux';

import { modalActions } from '../../redux/actions'

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
        absolute w-full h-full bg-black opacity-75 z-0
      " />
      <div className="
        flex flex-col
        max-w-3/4 max-h-3/4
        bg-white rounded z-10
      ">
        <div className="p-2 border-b-2">{props.modalProps.header}</div>
        <div className="flex-grow p-3">{props.modalProps.body}</div>
        <div className="flex-initial flex flex-row-reverse justify-between p-2 border-t-2">
          {
            props.modalProps.onClose ? (
              <button onClick={props.modalProps.onClose}>Continue</button>
            ) : (
              null
            )
          }
          <button onClick={() => {props.close()}}>Close</button>
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
