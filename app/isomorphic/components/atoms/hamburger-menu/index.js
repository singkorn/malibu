import React from "react";
import PT from "prop-types";

import "./hamburger-menu.m.css";

export const HamburgerMenu = ({ onMenuToggle, isMegaMenuOpen }) => {
  return (
    <button onClick={onMenuToggle} styleName={`hamburger ${isMegaMenuOpen ? "is-open" : ""}`}>
      <span styleName="line" />
      <span styleName="line" />
      <span styleName="line" />
    </button>
  );
};

HamburgerMenu.propTypes = {
  onMenuToggle: PT.func,
  isMegaMenuOpen: PT.bool
};

export default HamburgerMenu;