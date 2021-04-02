import { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ForecastContainer from "./container/forecast-container";

export type TTempMode = "F" | "C";

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
