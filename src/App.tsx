import { Component } from "react";
import "./App.css";
import ForecastItems from "./components/forecast/forecast-items";
import Navbar from "./components/navbar";
import ForecastContainer from "./container/forecast-container";
// import Clock from "./components/clock";
// import List from "./components/list/index";

class App extends Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Navbar />
        {/* <Clock /> */}
        {/* <List
          style={{ listStyleType: "none" }}
          items={[<span style={{ color: "red" }}>Hello</span>, "World"]}
        /> */}
        <ForecastContainer />
      </div>
    );
  }
}

export default App;
