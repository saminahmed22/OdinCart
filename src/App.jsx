import { useState } from "react";

import Header from "./Components/Header/Header";
import ItemList from "./Components/ItemList/ItemList";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="appDiv">
      <Header count={count}></Header>
      <ItemList setCount={setCount}></ItemList>
      <footer></footer>
    </div>
  );
}
