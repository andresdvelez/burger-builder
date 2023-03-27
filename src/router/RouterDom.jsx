import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Builder from "../components/Builder/Builder";
import Receipt from "../components/Receipt/Receipt";

const RouterDom = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Builder />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </Router>
  );
};

export default RouterDom;
