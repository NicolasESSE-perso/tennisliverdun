import React from "react";
import Style from "./BoutonTenUp.module.css";
import LogoTenup from "../../Images/LogoTenUp.svg";

export default function Entete() {
  return (
    <a
      href="https://tenup.fft.fr/club/55540116/offres"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={Style.BoutonTenUp}>
        <img className={Style.LogoTenup} src={LogoTenup} alt="" />
        <div className={Style.texteActionBouton}>Inscription en ligne</div>
      </div>
    </a>
  );
}
