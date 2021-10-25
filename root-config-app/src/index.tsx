import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LifeCycles, registerApplication, start } from "single-spa";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerApplication({
  name: "app-angular",
  app: (): Promise<LifeCycles> => (window as any).System.import("http://localhost:4200/main.js"),
  activeWhen: "/angular"
});

registerApplication({
  name: "app-react",
  app: (): Promise<LifeCycles> => (window as any).System.import("@single-spa-test/app-react"),
  activeWhen: "/react"
});

start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
