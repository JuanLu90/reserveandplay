import React from "react";

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="container-fluid">
        <p>First</p>
        <p>Second</p>
        <p>Third</p>
        WELCOME TO RESERVE&PLAY
        <div className="row">
          <div className="col">
            <span className="d-block">Email</span>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
          <span className="d-block">Password</span>
            <input type="password" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
