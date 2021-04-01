import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ForecastContainer from "./container/forecast-container";
// import Clock from "./components/clock";
// import List from "./components/list/index";

class App extends Component {
  public render(): JSX.Element {
    return (
      <>
        <Navbar />
        <ForecastContainer />;
      </>
    );
  }
}

export default App;
