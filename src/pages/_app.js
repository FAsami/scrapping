import React from "react";
import { ConfigProvider } from "antd";
import "@/styles/globals.css";

import theme from "../theme/theme-config";

const App = ({ Component, pageProps }) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
