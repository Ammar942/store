import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />}></Route>
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
