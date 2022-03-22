import React from "react";

const NavBar = ({ navName, funcname }) => {
  return (
    <nav
      style={{
        height: "2rem",
        backgroundColor: "red",
        fontSize: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>{navName}</div>
      <div>
        <button onClick={() => funcname("lict")}>Click Me</button>
      </div>
    </nav>
  );
};

export default NavBar;
