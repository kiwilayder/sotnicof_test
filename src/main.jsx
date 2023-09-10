import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { ConfigProvider } from "antd";
import { App } from "./app/App";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <ConfigProvider
      theme={{
         token: {
            colorPrimary: "#a024bc",
         },
      }}
   >
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </ConfigProvider>
);
