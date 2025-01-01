import React from "react";
import "../../../blocks/popup.css";
import closeIcon from "../../../images/popup__closeicon.png";

export default function Popup(props) {
  const { onClose, title, desc, link, img } = props;
  return (
    <>
      {desc ? (
        <section className="popup">
          <div className="popup__container" id="popupOverlay">
            {title ? (
              <img
                src={closeIcon}
                onClick={onClose}
                id="closeIcon"
                alt="Close Icon"
                className="popup__closer"
              />
            ) : (
              ""
            )}
            {img ? (
              <div className="popup__image-box">
                <img className="popup__image" src={img} alt={title} />
              </div>
            ) : (
              ""
            )}
            <div className="popup__content-text">
              {title ? <h3 className="popup__title">{title}</h3> : ""}
              {desc ? <p className="popup__desc">{desc}</p> : ""}
              {link ? (
                <a className="popup__link" href={link} target="_blank">
                  Veja o projeto inteiro aqui
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
