import { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ForecastContainer from "./container/forecast-container";

export type TTempMode = "F" | "C";

export type TAppState = {
  tempMode: TTempMode;
};
class App extends Component<Record<string, unknown>, TAppState> {
  constructor(props: Record<string, unknown>) {
    super(props);

    this.state = {
      tempMode: "C",
    };
  }

  private changeTempMode = (value: boolean): void => {
    this.setState({ tempMode: value ? "F" : "C" });
  };

  public render(): JSX.Element {
    return (
      <>
        <Navbar
          tempMode={this.state.tempMode}
          switchChangeHandler={this.changeTempMode}
        />
        <ForecastContainer tempMode={this.state.tempMode} />;
      </>
    );
  }
}

export default App;
