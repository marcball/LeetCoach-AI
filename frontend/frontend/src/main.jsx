import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DSAPage from "./pages/data_structures"
import ProblemTemplate from "./ProblemTemplate";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/data_structures" element={<DSAPage />} />
        <Route path="/problems/:topic/:problemID" element={<ProblemTemplate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);