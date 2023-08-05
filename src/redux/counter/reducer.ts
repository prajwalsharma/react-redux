import { counterTypes, IAction } from "./types";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case counterTypes.INCREMENT_COUNTER:
      return { ...state, count: state.count + action.data };
    case counterTypes.DECREMENT_COUNTER:
      return state.count === 0
        ? state
        : { ...state, count: state.count - action.data };
    default:
      return state;
  }
};
