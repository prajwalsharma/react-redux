import { useDispatch } from "react-redux";
import { incrementCounter } from "../redux/counter/actions";

export const IncrementCounter = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(incrementCounter(1))}>Increment</button>
  );
};
