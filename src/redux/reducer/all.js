import { combineReducers } from "redux";
import favoritesReducer from "./favR";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;
