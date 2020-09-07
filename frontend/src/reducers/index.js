import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import uiReducer from "./uiReducer";
import VendingMachineReducer from "./VendingMachineReducer";
import OrderReducer from "./OrderReducer";

export default combineReducers({
  ui: uiReducer,
  form: formReducer,
  vendingMachine: VendingMachineReducer,
  vendingMachineOrder: OrderReducer
});
