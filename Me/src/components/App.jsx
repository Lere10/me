import { useState } from "react";
import Header from "./Header/Header";
import Portfolio from "./Portfolio/Portfolio.jsx";
import Skills from "./Skills/Skills.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup){
    setPopup(popup);
  }
  function handleClosePopup(){
    setPopup(null)
  }


  return (
    <>
      <Header />
      <Portfolio
        handleOpenPopup={handleOpenPopup}
        handleClosePopup={handleClosePopup}
      />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
