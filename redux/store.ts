import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { encryptTransform } from "redux-persist-transform-encrypt";

// redux persist
import {
  FLUSH,
  PAUSE,
  PERSIST,
  // persistReducer,
  // persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import logger from "redux-logger";
// import storage from "redux-persist/lib/storage";
import { rootReducer } from "./modules/rootReducer";

// redux persist config
// const persistConfig = {
//   key: "persist-root",
//   storage,
//   blacklist: ["detections", "map", "uploader", "player"]
//   //   transforms: [
//   //     encryptTransform({
//   //       secretKey: process.env.NEXT_PUBLIC_REDUX_TRANSFORMER_KEY,
//   //       onError: (err) => {
//   //         console.log("err", err);
//   //       },
//   //     }),
//   //   ],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    (process.env.NODE_ENV === "development" &&
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger)) ||
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

// export const persistor = persistStore(store);
