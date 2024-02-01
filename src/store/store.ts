import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/usersApi";
import { testApi } from "./services/Tests";
import UsersSlice from "./Slice/Users.slice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
    user:UsersSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware,testApi.middleware])
});

setupListeners(store.dispatch);
