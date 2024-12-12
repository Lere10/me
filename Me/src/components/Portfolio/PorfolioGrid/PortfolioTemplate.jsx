import React, { useState } from "react";
import Popup from "../Popup/Popup.jsx";

export default function Template({ props }) {

  const [popup, setPopup] = useState(null)

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }


  return (
    <section className="portfolio__grid-box">
      {popup && <Popup onClose={handleClosePopup}></Popup>}
      <img
        className="portfolio__grid-box-img"
        src={props.projectThumb ? props.projectThumb : ""}
      />
      <p className="portfolio__grid-box-label">
        {props.projectName ? props.projectName : ""}
      </p>
    </section>
  );
}
