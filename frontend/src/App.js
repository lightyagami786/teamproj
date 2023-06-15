import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./Routes";
import {SignupPage} from "./Routes";
import About from "./components/About";
import BuyProduct from "./components/BuyProduct";
import CartPage from "./components/CartPage";
// import { ToastContainer } from "react-toastify";

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<h1>hil</h1>} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/buyProducts" element={<BuyProduct/>} />
        <Route path="/cartpage" element={<CartPage/>} />
        
      </Routes>

      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}

    </BrowserRouter>
  </div>
}

export default App;