export const enum counterTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER",
}

interface IActionIncrement {
  type: counterTypes.INCREMENT_COUNTER;
  data: number;
}

interface IActionDecrement {
  type: counterTypes.DECREMENT_COUNTER;
  data: number;
}

export type IAction = IActionIncrement | IActionDecrement;
