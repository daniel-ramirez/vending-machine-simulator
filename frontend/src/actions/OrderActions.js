import { apiWithNextActions } from "../api";
import { showSpinner, hideSpinner } from "./uiActions";
import { showNotification } from "../components/Common/Notifications";
import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_ERROR,
  ADD_NEW_ORDER,
  ADD_NEW_ORDER_SUCCESS,
  ADD_NEW_ORDER_ERROR,
  DELIVER_ORDER,
  DELIVER_ORDER_SUCCESS,
  DELIVER_ORDER_ERROR,
  ADD_ITEM_TO_ORDER_DETAIL
} from "./actionTypes";

let notificationsReference = {};

export const updateNotificationReference = ({ reference }) => dispatch => {
  notificationsReference = reference;
};

// #region fetchOrder
export const fetchOrders = () => dispatch => {
  // Dispatch action to show spinner
  dispatch(showSpinner());

  // Dispatch
  dispatch({ type: FETCH_ORDERS });

  const meta = {
    endpoint: "/orders",
    method: "get"
  };

  const nextActions = {
    onSuccess: fetchOrdersSuccess,
    onFailure: fetchOrdersError
  };

  dispatch(apiWithNextActions({ meta, nextActions }));
};

export const fetchOrdersSuccess = ({ response }) => dispatch => {
  // Dispatch action to hide spinner
  dispatch(hideSpinner());

  var order = response.data;
  order.sort(function (a, b) {
    return b.order_number - a.order_number;
  });

  dispatch(
    showNotification({
      notificationsReference,
      message: `Orders load successfully`
    })
  );

  dispatch({
    type: FETCH_ORDERS_SUCCESS,
    payload: { orders: response.data }
  });
};

export const fetchOrdersError = ({ error }) => dispatch => {
  // Dispatch action to hide spinner
  dispatch(hideSpinner());

  dispatch(
    showNotification({
      notificationsReference,
      message: `Error loading orders`,
      appearance: "error"
    })
  );

  dispatch({ type: FETCH_ORDERS_ERROR, payload: error });
};
// #endregion fetchOrder

// #region addNewOrder
export const addNewOrder = newOrderData => dispatch => {
  // Dispatch
  dispatch({ type: ADD_NEW_ORDER });
  console.log(newOrderData);
  // Map  request details
  const meta = {
    endpoint: "/orders",
    method: "post"
  };

  const nextActions = {
    onSuccess: addNewOrderSuccess,
    onFailure: addNewOrderError
  };
  dispatch(
    apiWithNextActions({
      meta,
      requestData: {
        ...newOrderData
      },
      nextActions
    })
  );
};

export const addNewOrderSuccess = ({ response }) => dispatch => {
  dispatch(
    showNotification({
      notificationsReference,
      message: `New orders added successfully`
    })
  );

  dispatch({ type: ADD_NEW_ORDER_SUCCESS, payload: response.data });

  dispatch(fetchOrders());
};

export const addNewOrderError = ({ error }) => dispatch => {
  dispatch(
    showNotification({
      notificationsReference,
      message: `Error adding new order`,
      appearance: "error"
    })
  );

  dispatch({ type: ADD_NEW_ORDER_ERROR, payload: error });
};
// #endregion addNewOrder

// #region deliverOrder
export const deliverOrder = orderId => dispatch => {
  // Dispatch action to show spinner
  dispatch(showSpinner());

  // Dispatch
  dispatch({ type: DELIVER_ORDER });

  const meta = {
    endpoint: `/orders/${orderId}/delivery`,
    method: "get"
  };

  const nextActions = {
    onSuccess: deliverOrderSuccess,
    onFailure: deliverOrderError
  };

  dispatch(apiWithNextActions({ meta, nextActions }));
};

export const deliverOrderSuccess = ({ response }) => dispatch => {
  // Dispatch action to hide spinner
  dispatch(hideSpinner());

  dispatch(
    showNotification({
      notificationsReference,
      message: `Order delivered successfully`
    })
  );

  dispatch({
    type: DELIVER_ORDER_SUCCESS,
    payload: { orders: response.data }
  });

  dispatch(fetchOrders());
};

export const deliverOrderError = ({ error }) => dispatch => {
  // Dispatch action to hide spinner
  dispatch(hideSpinner());

  dispatch(
    showNotification({
      notificationsReference,
      message: `Error delivering order`,
      appearance: "error"
    })
  );

  dispatch({ type: DELIVER_ORDER_ERROR, payload: error });
};
// #endregion fetchOrder

export const addToOrderDetail = newOrder => dispatch => {
  dispatch(
    showNotification({
      notificationsReference,
      message: `Item added to order successfully`
    })
  );

  dispatch({ type: ADD_ITEM_TO_ORDER_DETAIL, payload: { newOrder } });
};
