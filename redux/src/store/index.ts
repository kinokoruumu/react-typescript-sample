import { createStore, Store } from "redux";
import { createReducer, RootState } from "./reducer";

export type RootStore = Store<RootState>;

export const configureStore = (): RootStore => {
  return createStore(createReducer());
};
