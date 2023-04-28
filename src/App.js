import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedSignUp from "./pages/SharedSignUp";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpPaymentPicker from "./pages/SignUpPaymentPicker";
import SignUpPlan from "./pages/SignUpPlan";
import SignUpPlanForm from "./pages/SignUpPlanForm";
import SignUpRegForm from "./pages/SignUpRegForm";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SharedSignUp />}>
          <Route index element={<SignUp />} />
          <Route path="regForm" element={<SignUpRegForm />} />
          <Route path="plan" element={<SignUpPlan />} />
          <Route path="planForm" element={<SignUpPlanForm />} />
          <Route path="paymentPicker" element={<SignUpPaymentPicker />} />
        </Route>
        <Route path="login" element={<SignIn />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
