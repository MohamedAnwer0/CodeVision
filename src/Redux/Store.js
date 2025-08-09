import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

// reducers
import AuthReducer from "./Slice/Auth";

const Store = configureStore({
    reducer: {
        Auth: AuthReducer,
    },
    devTools: composeWithDevTools()
});

export default Store