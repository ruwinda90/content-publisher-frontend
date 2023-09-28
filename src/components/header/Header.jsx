import React from "react";
import "./header.css";
import UserData from "../userdata/UserData";

const Header = ({ title }) => {
  return (
    <main className="headerComp">
      <div>{title}</div>
      <div><UserData /></div>
    </main>
  );
};

export default Header;
