import * as React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./src/store";
import CounterPage from "./src/components/pages/Counter";

const store = configureStore();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <CounterPage />
      </Provider>
    );
  }
}

export { App };
