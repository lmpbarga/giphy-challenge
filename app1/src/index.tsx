import React from "react";
import ReactDOM from "react-dom/client";
import { makeApp } from "./factories/app-factorie";
import { useGetGifRandom } from "./hooks/useGetGifRandom/useGetGifRandom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const App = () =>
    makeApp({
        useGetGifRandom,
    });

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
