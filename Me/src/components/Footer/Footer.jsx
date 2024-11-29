import React from "react";
import "../../blocks/footer.css";
import rect from "../../images/footer__rect.png";
import phoneIcon from "../../images/footer__phone-img.png";
import emailIcon from "../../images/footer__email-img.png";
import gitHubIcon from "../../images/footer__github.png";
import linkedinIcon from "../../images/footer__linkedin.png";
import behanceIcon from "../../images/footer__be.png";

export default function Footer() {
  const phoneNumber = "+55 (85) 99767-5292";
  return (
    <section className="footer">
      <h3 className="footer__title">Contatos</h3>
      <div className="footer__content">
        <div className="footer__content-contact">
          <div className="footer__content-contact-phone">
            <img
              className="footer__content-contact-phone-img"
              src={phoneIcon}
              alt="Phone Icon"
            />
            <p className="footer__content-contact-phone-text">{phoneNumber}</p>
          </div>
          <div className="footer__content-contact-email">
            <img
              className="footer__content-contact-email-img"
              alt="Email Icon"
              src={emailIcon}
            />
            <p className="footer__content-contact-email-text">
              Leredsb10@gmail.com
            </p>
          </div>
        </div>
        <img className="footer__rect" src={rect} />
        <div className="footer__content-socials">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lucas-iere-a197a5154/"
          >
            <img
              className="footer__content-socialIcon"
              alt="Linkedin Icon"
              src={linkedinIcon}
            />
          </a>
          <a target="_blank" href="https://github.com/Lere10">
            <img
              className="footer__content-socialIcon"
              alt="Github Icon"
              src={gitHubIcon}
            />
          </a>
          <a target="_blank" href="https://www.behance.net/lucasbanko6416">
            <img
              className="footer__content-socialIcon"
              alt="Behance Icon"
              src={behanceIcon}
            />
          </a>
        </div>
      </div>
      <div className="footer__foot">
        <p className="footer__foot-text">By Lere</p>
      </div>
    </section>
  );
}
