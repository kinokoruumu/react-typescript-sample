import { Action, ActionCreator } from "redux";

export type Increment = "counter/INCREMENT";

export type IncrementAction = Action<Increment>;

export const incrementAction: ActionCreator<IncrementAction> = () => ({
  type: "counter/INCREMENT"
});
