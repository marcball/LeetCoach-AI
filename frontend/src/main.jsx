import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DSAPage from "./pages/data_structures"
import CategoryPage from "./pages/CategoryPage";
import ProblemTemplate from "./ProblemTemplate";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dsa" element={<DSAPage />} />
        <Route path="/dsa/:categorySlug" element={<CategoryPage />} />
        <Route path="/dsa/:categorySlug/:problemID" element={<ProblemTemplate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);