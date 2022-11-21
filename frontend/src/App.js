import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import {
  getCurrentUser,
  registerClient,
  registerLawyer,
} from "./JS/actions/auth";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import Profile from "./Pages/Profile";
import Lawyers from "./Pages/Lawyers";

import About from "./Components/About/About";
import Practice from "./Components/Practice/Practice";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AdminDashbord from "./Components/AdminDashbord/AdminDashbord";
import LawyersDetails from "./Components/LawyersDetails/LawyersDetails";
import Alerts from "./Components/Alerts/Alerts";
import SignUpAsClient from "./Components/Sign/SignUpAsClient";
import SignUpAsLawyer from "./Components/Sign/SignUpAsLawyer";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

import PrivateAdmin from "./Private/PrivateAdmin";
import PrivateProfile from "./Private/PrivateProfile";
import Private from "./Private/Private";
import Layout from "./Pages/Layout";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.User);

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(getCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Layout><Alerts /></Layout>
      <Routes>
        <Route
          path="/lawyer/register"
          element={<Layout><SignUpAsLawyer action={registerLawyer} /></Layout>}
        />
        <Route
          path="/client/register"
          element={<Layout><SignUpAsClient action={registerClient} /></Layout>}
        />
        <Route path="/login" element={<Layout><Login /></Layout>} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/practice"
          element={
            <Layout>
              <Practice />
            </Layout>
          }
        />
        <Route path="/contact" element={<Footer />} />

        <Route
          path="/dashboard"
          element={
            <PrivateAdmin user={user}>
              <AdminDashbord />
            </PrivateAdmin>
          }
        />
        <Route
          path="/lawyers"
          element={
            <Layout>
              <Private>
                <Lawyers />
              </Private>
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <PrivateProfile user={user}>
                <Profile />
              </PrivateProfile>
            </Layout>
          }
        />
        <Route
          path="/lawyers/:id"
          element={
            <Layout>
              <LawyersDetails user={user} />
            </Layout>
          }
        />
        <Route path="/booking" element={<Appointment />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
