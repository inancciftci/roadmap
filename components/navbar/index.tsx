import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between">
        <h1>Roadmap</h1>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
