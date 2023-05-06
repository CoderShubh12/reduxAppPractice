import { combineReducers } from "redux";
import { todoReducer } from "./todoApp/reducers/services";

export const rootreducer=combineReducers({
    todoReducer,
})