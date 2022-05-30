import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", text: "home" },
  { to: "/starred", text: "starred" },
];

const Navs = () => {
  return (<div>
      <ul>
          {links.map((link) => (
              <li key={link.to}>
                  <Link to={link.to}>{link.text}</Link>
              </li>
          ))}
      </ul>
  </div>);
};

export default Navs;
