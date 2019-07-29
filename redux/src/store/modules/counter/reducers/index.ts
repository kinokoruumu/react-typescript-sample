import { IncrementAction } from "../actions/increment";

export type CounterAction = IncrementAction;

export interface State {
  count: number;
}
export const initialState: State = {
  count: 0
};

export const counterReducer = (
  state: State = initialState,
  action: CounterAction
): State => {
  switch (action.type) {
    case "counter/INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return {
        ...state
      };
  }
};
