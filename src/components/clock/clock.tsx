import React from "react";

export class Clock extends React.Component<
  Record<string, unknown>,
  { time: string }
> {
  private interval: NodeJS.Timeout;
  public state: { time: string } = {
    time: new Date().toTimeString().split(" ")[0],
  };

  constructor(props: Record<string, unknown>) {
    super(props);

    this.interval = setInterval(() => {
      this.setState({ time: new Date().toTimeString().split(" ")[0] });
    }, 1000);
  }

  public componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  public render(): JSX.Element {
    return (
      <div>
        <div style={{ fontSize: "2rem" }}>{this.state.time}</div>
      </div>
    );
  }
}
