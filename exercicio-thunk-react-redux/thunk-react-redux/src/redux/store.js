import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import dogReducer from "./reducer/reducer";

const store = createStore(dogReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store