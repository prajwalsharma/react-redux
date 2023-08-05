import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  return <h1>{count}</h1>;
};
