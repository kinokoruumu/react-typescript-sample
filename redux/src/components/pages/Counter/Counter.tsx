import * as React from "react";
import { incrementAction } from "../../../store/modules/counter/actions/increment";

interface Props {
  count: number;
  incrementAction: typeof incrementAction;
}
const CounterPageTemplate: React.FunctionComponent<Props> = ({
  count,
  incrementAction
}) => (
  <div>
    <p>{`${count}pt`}</p>
    <button onClick={incrementAction}>increment</button>
  </div>
);

export { CounterPageTemplate, Props };
