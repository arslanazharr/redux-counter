const initialState = 0;

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      if (state === 0) {
        return state;
      } else {
        return state - 1;
      }
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default changeNumber;
