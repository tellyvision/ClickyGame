import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
      <div className="brand animated divghtSpeedIn" id="gameTitle">
        {props.title}
      </div>

      <div id="score">Current Score: {props.score}</div>

      <div id="topScore">Top Score: {props.topScore}</div>

      <div id="rw">{props.rightWrong}</div>
  </nav>
);

export default Nav;