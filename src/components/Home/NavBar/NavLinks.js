import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

import IconGroup from '../../Icons/IconGroup';
import IconHome from '../../Icons/IconHome';
import IconMenu from '../../Icons/IconMenu';
import IconPuzzle from '../../Icons/IconPuzzle';
import IconUser from '../../Icons/IconUser';

const NavLink = (props) => {
  const Icon = React.cloneElement(
    props.icon,
    { className: "mx-auto fill-current" }
  );

  const checkActive = (match, location) => {
    if (match === null) return false;
    if (match.url === "" && location.pathname !== "/") return false;
    return true;
  }

  return (
    <Link className="NavLink
      flex
      px-1 py-2
      border-l-2
      border-transparent
      hover:no-underline
      hover:bg-gray-900
      hover:text-white
    "
    to={props.path}
    isActive={checkActive} >
      <span className="w-1/4">
        {Icon}
      </span>
      <span className="flex-grow px-2 text-left">{props.title}</span>
    </Link>
  );
};

const NavLinkDivider = (props) => (
  <div className="NavLinkDivider w-full mt-2 pt-2 border-t-2 border-gray-900"></div>
);

const NavLinks = (props) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  return (
    <div className="
      flex flex-col
      w-1/5 md:w-full
      h-full md:h-auto
      relative
    ">
      <IconMenu className="block md:hidden m-auto fill-current"
        onClick={() => setDisplayDropdown(!displayDropdown)} />
      <div className={`NavLinks
        ${displayDropdown ? 'flex active' : 'hidden'} md:flex flex-col
        w-auto md:w-full
        absolute md:relative
        right-0
        bg-gray-700
        z-10
      `}>
        <NavLink title="Home"
          icon={<IconHome />}
          path="/" />
        <NavLink title="Games"
          icon={<IconPuzzle />}
          path="/games" />
        <NavLink title="Players"
          icon={<IconGroup />}
          path="/players" />
        <NavLinkDivider />
        <NavLink title="Profile"
          icon={<IconUser />}
          path="/profile" />
      </div>
    </div>
  );
};

export default NavLinks;
