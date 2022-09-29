import React, { useEffect, useState } from "react";
import MenuItem from "./SidebarItem";
import logo from "../img/logo-no-background.png";
import "./sidebar.css";

export const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "/",
  },
  {
    name: "Login",
    exact: true,
    to: "/Login",
  },
  {
    name: "Study",
    exact: true,
    to: "/study",
  },
  {
    name: "Music",
    exact: true,
    to: "/Music",
  },
];

function Sidebar() {
  return (
    <div className="side-menu">
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>
      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
            />
          ))}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">photo</div>
        <div className="user-info">
          <h5>User info</h5>
          <p>Sns icon</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
