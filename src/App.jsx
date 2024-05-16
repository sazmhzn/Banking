import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import "./index.css";
import MyBanks from "./pages/MyBanks";
import Home from "./pages/Home";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import TransactionHistory from "./pages/TransactionHistory";
import Payment from "./pages/Payment";
import { ToastContainer } from "react-toastify";
// import AuthLayout from "./pages/auth/AuthLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/my-banks" element={<MyBanks />} />
            <Route path="/transaction-history" element={<TransactionHistory />} />
            <Route path="/payment-transfer" element={<Payment />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>

    // <Layout />
  );
}

export default App;
