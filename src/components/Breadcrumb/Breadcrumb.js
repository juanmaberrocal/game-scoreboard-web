import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import IconCheveronRight from '../Icons/IconCheveronRight';

const Breadcrumb = (props) => {
  const crumbs = props.crumbs;

  return (
    <div className="Breadcrumb
      flex flex-row flex-no-wrap
      w-full
      mb-4
    ">
    {crumbs.map((crumb, index) => {
      const isLast = (index + 1) === crumbs.length;
      const checkLast = () => (isLast);

      return (
        <div className={`
        flex flex-row
        text-sm font-medium
        ${isLast ? null : 'text-gray-500'}
        `} key={index} >
          <NavLink
          to={crumb[1]}
          isActive={checkLast} >
            {crumb[0]}
          </NavLink>
          { isLast ? null : (<IconCheveronRight className="fill-current" />)}
        </div>
      );
    })}
    </div>
  );
};

Breadcrumb.propTypes = {
  crumbs: PropTypes.array.isRequired
};

export default Breadcrumb;
