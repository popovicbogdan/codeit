import React from "react";
import "./Dashboard.scss";
import Homepage from "../Homepage/Homepage";
import Header from "../Header/Header";
import Articles from "../Articles/Articles";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Homepage />
      <Articles id="Articles" />
    </div>
  );
};

export default Dashboard;
