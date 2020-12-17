import { createReducer } from '../../app/common/util/reducerUtils';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './testConstants';

const initialState = {
  data: 42
};

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };

const incrementCounter = (state) => {
  return { ...state, data: state.data + 1 };
};

const decrementCounter = (state) => {
  return { ...state, data: state.data - 1 };
};

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});
