import React from "react";
import "./Dashboard.scss";
import Homepage from "../Homepage/Homepage";
import Header from "../Header/Header";
import Articles from "../Articles/Articles";
import Slider from "../Slider/Slider";
import InfoSection from "../InfoSection/InfoSection";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />

      <Homepage />

      <Articles />

      <Slider />

      <InfoSection />
    </div>
  );
};

export default Dashboard;
