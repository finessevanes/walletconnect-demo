import React from "react";
import { Web3ModalProvider } from "@web3modal/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const config = {
  projectId: "<YOUR_PROJECT_ID>",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ModalProvider config={config}>
    <App />
  </Web3ModalProvider>
);

