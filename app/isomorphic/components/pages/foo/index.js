import React from "react";
import { Link } from "@quintype/components";

export const Foo = props => {
  return (
    <div>
      <div>Hello this is the Foo component!</div>
      <ul>
        <li>
          <Link href="/technology">Technology (no qs)</Link>
        </li>
        <li>
          <Link href="/politics">Politics (no qs)</Link>
        </li>
        <li>
          <Link href="/sports">Sports (no qs)</Link>
        </li>
        <li>
          <Link href="/technology/automobiles/henry-ford-and-the-revolution?lorem=ipsum">
            Story Page (has qs lorem=ipsum)
          </Link>
        </li>
        <li>
          <Link href="https://developers.quintype.com/quintype-node-components/LinkBase.html">
            External Link (no qs)
          </Link>
        </li>
      </ul>
    </div>
  );
};
