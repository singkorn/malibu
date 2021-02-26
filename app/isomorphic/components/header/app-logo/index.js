import React from "react";
import { Link } from "@quintype/components";
import assetify from "@quintype/framework/assetify";

import "./app-logo.m.css";

import logo from "../../../../assets/images/malibu-logo.png";

function AppLogo() {
  return (
    <div>
      <Link href="/">
        <img
          width="53"
          height="60"
          loading="lazy"
          styleName="publisher-logo"
          srcSet={` ${assetify(logo)}`}
          src={assetify(logo)}
          alt="Logo"
        />
      </Link>
    </div>
  );
}

export { AppLogo };
