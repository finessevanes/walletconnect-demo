import { Web3ModalProvider } from "@web3modal/react";
import { chains, providers } from '@web3modal/ethereum'
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const { REACT_APP_PROJECT_ID } = process.env
const config = {
  projectId: REACT_APP_PROJECT_ID,
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true,
    chains: [chains.mainnet],
    providers: [providers.walletConnectProvider({ projectId: REACT_APP_PROJECT_ID})]
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3ModalProvider config={config}>
    <App />
  </Web3ModalProvider>
);
