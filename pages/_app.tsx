import { FC } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store";
import "../styles/globals.scss";
import AppLayout from "../layouts/AppLayout";
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
