import React from "react";
import ReactDOM from "react-dom/client";
import { makeApp } from "./factories/app-factorie";
import { useDynamicRequest } from "./hooks/useDynamicRequest/useDynamicRequest";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const App = () =>
    makeApp({
        useDynamicRequest: useDynamicRequest,
    });

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
