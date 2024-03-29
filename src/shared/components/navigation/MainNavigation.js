import React, { useState } from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./SideDrawer.css";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerOpenHandler = () => {
    setIsDrawerOpen(true);
  };

  const drawerCloseHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen && <BackDrop onClick={drawerCloseHandler} />}

      <SideDrawer
        show={isDrawerOpen}
        onClick={drawerCloseHandler}
        className="main-navigation__drawer-nav"
      >
        <NavLinks />
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={drawerOpenHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to={"/"}>Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
