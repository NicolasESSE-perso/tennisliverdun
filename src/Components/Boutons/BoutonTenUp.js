import React, { useEffect } from "react";
import Style from "./BoutonTenUp.module.css";
import LogoTenup from "../../Images/LogoTenUp.svg";

export default function Entete({ hauteur, largeur, texte }) {
  const StyleDynamique = { height: hauteur, width: largeur };
  console.log(StyleDynamique);

  return (
    <a
      className={Style.BoutonTenUp}
      style={StyleDynamique}
      href="https://tenup.fft.fr/club/55540116/offres"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={Style.LogoTenup} src={LogoTenup} alt="" />
      <div className={Style.texteActionBouton}>{texte}</div>
    </a>
  );
}
