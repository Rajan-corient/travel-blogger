import React from "react";
import "./MainHeader.css";

const MainHeader = (props) => {
  return <footer className="main-header">{props.children}</footer>;
};

export default MainHeader;
