import { counterTypes } from "./types";

export const incrementCounter = (value: number) => {
  return {
    type: counterTypes.INCREMENT_COUNTER,
    data: value,
  };
};

export const decrementCounter = (value: number) => {
  return {
    type: counterTypes.DECREMENT_COUNTER,
    data: value,
  };
};
