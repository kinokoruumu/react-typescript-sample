import * as React from "react";
import { connect } from "react-redux";
import { CounterPageTemplate, Props as CounterPageProps } from "./Counter";
import { RootState } from "../../../store/reducer";
import { incrementAction } from "../../../store/modules/counter/actions/increment";

type Props = CounterPageProps;

const CounterPage: React.FunctionComponent<Props> = ({
  count,
  incrementAction
}) => {
  return (
    <CounterPageTemplate count={count} incrementAction={incrementAction} />
  );
};

export default connect(
  (state: RootState) => ({
    count: state.counter.count
  }),
  dispatch => ({
    incrementAction: () => dispatch(incrementAction())
  })
)(CounterPage);
