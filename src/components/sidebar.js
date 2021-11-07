import React from "react";
import { useStore } from "./../hooks";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Navbar, NavbarBrand } from "react-bootstrap";
import { setTheme } from "../services";
import { THEMES } from "../template.data";

const Default = () => {
  const { isSidebarOpen, toggleSidebar, setIsThemeFetching } = useStore();
  const currentTheme = localStorage.getItem("theme");

  const setThemeAsync = async (theme) => {
    await setTheme(theme, setIsThemeFetching);
  };
  return (
    <ProSidebar
      toggled={isSidebarOpen}
      onToggle={toggleSidebar}
      breakPoint={"lg"}
    >
      <SidebarHeader className="bg-primary border-0">
        <Navbar>
          <NavbarBrand className="w-100 text-center text-light m-0">
            React-bootstrap template
          </NavbarBrand>
        </Navbar>
      </SidebarHeader>

      <Menu className="bg-dark p-0" iconShape="circle">
        <SubMenu title="Themes" icon={"fa"}>
          {THEMES.map((theme) => (
            <MenuItem
              active={theme === currentTheme}
              className="text-capitalize"
              key={theme}
              onClick={() => setThemeAsync(theme)}
              children={theme}
            />
          ))}
        </SubMenu>

        <SubMenu title="Components" icon={"fa"}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Default;
