import { baseQuery } from "../api/baseQuery";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

import authReducer from "../../modules/auth/service/authSlice"
import persistStore from "redux-persist/es/persistStore";



const persistConfigAuth = {
    key: "orchardelegance_root",
    storage,
};

const persistedReducerUser = persistReducer(persistConfigAuth, authReducer);

export const store = configureStore({
    reducer: {
        [baseQuery.reducerPath]: baseQuery.reducer,
        user: persistedReducerUser
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (gDm) => gDm({ serializableCheck: false }).concat(baseQuery.middleware, thunk)
});
setupListeners(store.dispatch);

const persistor = persistStore(store);
export { persistor };
// export default store;


