import { useDispatch } from "react-redux";
import { decrementCounter } from "../redux/counter/actions";

export const DecrementCounter = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(decrementCounter(1))}>Decrement</button>
  );
};
