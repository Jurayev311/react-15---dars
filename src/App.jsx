import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Hero from "./components/hero/Hero";
import Admin from "./pages/admin/Admin";
import Cars from "./pages/admin/Cars";
import Createcar from "./pages/admin/Createcar";
import Documents from "./pages/admin/Documents";
import Employees from "./pages/admin/Employees";
import Orders from "./pages/admin/Orders";
import Payments from "./pages/admin/Payments";
import Reports from "./pages/admin/Reports";
import Analytics from "./pages/admin/Analytics";
import Settings from "./pages/admin/Settings";
import Notification from "./pages/admin/Notification";
import Home from "./pages/home/Home";
import Notfound from "./pages/not-found/Notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Hero />} />
      </Route>
      
      <Route path="/admin" element={<Admin />}>
        <Route path="cars" element={<Cars />} />
        <Route path="createcar" element={<Createcar />} />
        <Route path="documents" element={<Documents />} />
        <Route path="employees" element={<Employees />} />
        <Route path="orders" element={<Orders />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reports" element={<Reports />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
        <Route path="notification" element={<Notification />} />
        <Route path="*" element={<Notfound />} />
      </Route>

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
