import { SHOW_SPINNER, HIDE_SPINNER } from "../actions/actionTypes";

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isLoading: true
      };

    case HIDE_SPINNER:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
