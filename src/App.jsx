import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Loading from './components/loading/Loading'

const Home = React.lazy(() => import("./pages/home/Home"));
const Hero = React.lazy(() => import("./components/hero/Hero"));
const Admin = React.lazy(() => import("./pages/admin/Admin"));
const Cars = React.lazy(() => import("./pages/admin/Cars"));
const Createcar = React.lazy(() => import("./pages/admin/Createcar"));
const Documents = React.lazy(() => import("./pages/admin/Documents"));
const Employees = React.lazy(() => import("./pages/admin/Employees"));
const Orders = React.lazy(() => import("./pages/admin/Orders"));
const Payments = React.lazy(() => import("./pages/admin/Payments"));
const Reports = React.lazy(() => import("./pages/admin/Reports"));
const Analytics = React.lazy(() => import("./pages/admin/Analytics"));
const Settings = React.lazy(() => import("./pages/admin/Settings"));
const Notification = React.lazy(() => import("./pages/admin/Notification"));
const Notfound = React.lazy(() => import("./pages/not-found/Notfound"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
