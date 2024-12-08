import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./pages/homepage/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Detail from "./pages/detail/Detail";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/error/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);