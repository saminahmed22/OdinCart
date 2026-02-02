import { useState } from "react";
import { Outlet } from "react-router";

import Header from "./Components/Header/Header";

export default function App() {
  const [cartItems, setCartItems] = useState({});

  return (
    <div className="appDiv">
      <Header cartItems={cartItems} setCartItems={setCartItems}></Header>
      <Outlet context={[cartItems, setCartItems]}></Outlet>
      <footer></footer>
    </div>
  );
}
