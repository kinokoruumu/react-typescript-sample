import * as React from "react";

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export { App };
