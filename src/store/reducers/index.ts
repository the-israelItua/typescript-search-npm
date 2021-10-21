import { combineReducers } from "redux";
import { packagesReducer } from "./packages";

const reducers = combineReducers({
  packages: packagesReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
