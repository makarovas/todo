import React from "react";
import './header.css'

const Header = ({toDo, done}) => {
  return (
    <div className="header d-flex justify-content-between bd-highlight  ">
      <h1 className="h1  ">To Do Me</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  )
}

export default Header;