import {
  FETCH_VENDING_MACHINE_ITEMS,
  FETCH_VENDING_MACHINE_ITEMS_SUCCESS,
  FETCH_VENDING_MACHINE_ITEMS_ERROR,
} from "../actions/actionTypes";

export const initialState = {
  vendingMachineItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VENDING_MACHINE_ITEMS:
      return state;

    case FETCH_VENDING_MACHINE_ITEMS_SUCCESS:
      return {
        ...state,
        vendingMachineItems: action.payload.items,
      };

    case FETCH_VENDING_MACHINE_ITEMS_ERROR:
      return {
        ...state,
        vendingMachineItems: initialState.vendingMachineItems,
      };

    default:
      return state;
  }
};
