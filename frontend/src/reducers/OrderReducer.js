import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_ERROR,
  ADD_NEW_ORDER,
  ADD_NEW_ORDER_SUCCESS,
  ADD_NEW_ORDER_ERROR,
  ADD_ITEM_TO_ORDER_DETAIL
} from "../actions/actionTypes";

export const initialState = {
  vendingMachineOrders: [],
  vendingMachineNewOrder: {
    order_details: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return state;

    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        vendingMachineOrders: action.payload.orders
      };

    case FETCH_ORDERS_ERROR:
      return {
        ...state,
        vendingMachineOrders: initialState.vendingMachineOrders
      };

    case ADD_NEW_ORDER:
      return state;

    case ADD_NEW_ORDER_SUCCESS:
      return {
        ...state,
        vendingMachineNewOrder: {
          order_details: []
        }
      };

    case ADD_NEW_ORDER_ERROR:
      return {
        ...state
      };

    case ADD_ITEM_TO_ORDER_DETAIL:
      return {
        ...state,
        vendingMachineNewOrder: action.payload.newOrder
      };

    default:
      return state;
  }
};
