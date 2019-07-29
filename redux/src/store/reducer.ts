import { combineReducers } from "redux";
import { counterReducer } from "./modules/counter/reducers/index";

export const createReducer = () =>
  combineReducers({
    counter: counterReducer
  });

export type RootState = ReturnType<ReturnType<typeof createReducer>>;
