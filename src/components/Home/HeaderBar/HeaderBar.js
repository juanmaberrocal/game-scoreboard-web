import React from "react";
import { connect } from 'react-redux';
import { NavLink, withRouter } from "react-router-dom";

import { authActions, modalActions } from '../../../redux/actions'
import IconNotification from '../../Icons/IconNotification';

const HeaderBar = (props) => {
  const onLogout = async () => {
    const didLogout = await props.logout();

    if (didLogout) {
      props.closeLogout();
      props.history.push('/login');
    }
  };
  const logOutModalProps = {
    type: 'warning',
    header: 'Log Out',
    body: 'Are you sure you want to log out?',
    onContinue: onLogout
  };

  return (
    <header className="HeaderBar
      flex flex-row-reverse items-center
      h-16 w-full
      px-16 py-2
      bg-white
      shadow
    ">
      <button className="
        border rounded border-gray-700
        px-2 py-1
        text-gray-900 text-sm font-medium
        hover:text-gray-400 hover:bg-gray-700
      " onClick={() => {props.openLogout(logOutModalProps)}} >
        Log Out
      </button>
      <NavLink className="hidden mx-4" to="/notifications">
        <IconNotification className="text-gray-900 fill-current" />
      </NavLink>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => (
  {
    openLogout: (props) => (dispatch(modalActions.open(props))),
    closeLogout: () => (dispatch(modalActions.close())),
    logout: () => (dispatch(authActions.logout()))
  }
);

export default withRouter(connect(null, mapDispatchToProps)(HeaderBar));
