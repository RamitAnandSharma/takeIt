import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer  from "../store/reducers/index";

  export default function configureStore() {
    return createStore(rootReducer);
  }
