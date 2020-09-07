import { apiWithNextActions } from "../api";
import { showSpinner, hideSpinner } from "./uiActions";
import { showNotification } from "../components/Common/Notifications";
import {
  FETCH_VENDING_MACHINE_ITEMS,
  FETCH_VENDING_MACHINE_ITEMS_SUCCESS,
  FETCH_VENDING_MACHINE_ITEMS_ERROR
} from "./actionTypes";

let notificationsReference = {};

export const updateNotificationReference = ({ reference }) => dispatch => {
  notificationsReference = reference;
};

export const fetchVendingMachines = () => dispatch => {
  // Dispatch action to show spinner
  dispatch(showSpinner());

  // Dispatch
  dispatch({ type: FETCH_VENDING_MACHINE_ITEMS });

  const meta = {
    endpoint: "/items",
    method: "get"
  };

  const nextActions = {
    onSuccess: fetchVendingMachinesSuccess,
    onFailure: fetchVendingMachinesError
  };

  dispatch(apiWithNextActions({ meta, nextActions }));
};

export const fetchVendingMachinesSuccess = ({ response }) => dispatch => {
  // Dispatch action to hide spinner
  dispatch(hideSpinner());

  dispatch(
    showNotification({
      notificationsReference,
      message: `Items load successfully`
    })
  );

  dispatch({
    type: FETCH_VENDING_MACHINE_ITEMS_SUCCESS,
    payload: { items: response.data }
  });
};

export const fetchVendingMachinesError = ({ error }) => dispatch => {
  // Dispatch action to hide spinner
  dispatch(hideSpinner());

  dispatch(
    showNotification({
      notificationsReference,
      message: `Error loading items`,
      appearance: "error"
    })
  );

  dispatch({ type: FETCH_VENDING_MACHINE_ITEMS_ERROR, payload: error });
};
