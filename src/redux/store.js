import { configureStore } from "@reduxjs/toolkit";
import { mentorsboardApi } from "./slices/mentorsboardApi";
import tokenSlice from "./slices/tokenSlice";
import userSlice from "./slices/userSlice";
import visibilityReducer from "./slices/visibilitySlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PERSIST } from "redux-persist";



const persistConfig = {
  key: "user",
  version: 1,
  storage: storage,
};

const persistedUserSlice = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    [mentorsboardApi.reducerPath]: mentorsboardApi.reducer,
    user: persistedUserSlice,
    visibility: visibilityReducer,
    token: tokenSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(mentorsboardApi.middleware),
  devTools: false,
});

export let persistor = persistStore(store);