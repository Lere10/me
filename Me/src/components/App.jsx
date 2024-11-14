import { useState } from "react";
import Header from "./Header/Header";
import Portfolio from "./Portfolio/Portfolio.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Portfolio />
    </>
  );
}

export default App;
