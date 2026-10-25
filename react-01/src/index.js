import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Overview from "./pages/overview/Overview";
import Tvm from "./pages/tvm/Tvm";
import Debt from "./pages/debt/Debt";
import Equity from "./pages/equity/Equity";
import Alternatives from "./pages/alternatives/Alternatives";
import Applications from "./pages/applications/Applications";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="overview" element={<Overview />} />
          <Route path="tvm" element={<Tvm />} />
          <Route path="debt" element={<Debt />} />
          <Route path="equity" element={<Equity />} />
          <Route path="alternatives" element={<Alternatives />} />
          <Route path="applications" element={<Applications />} />
        </Route>
      </Routes>
    </HashRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);