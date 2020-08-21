import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

// Redux extension
let devTools = null;

// Enable state change logging only for dev environment
if (process.env.NODE_ENV === "development") {
  console.log("NODE_ENV =>", process.env.NODE_ENV);
  const { logger } = require("redux-logger");
  middleware.push(logger);

  devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    devTools
  )
);

export default store;
