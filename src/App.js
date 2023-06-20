import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./routes";

import themeCustom from "./utils/themeCustom";

import { persistor, store } from "./redux";

import "./App.css";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider theme={themeCustom}>
          <Routes />
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
