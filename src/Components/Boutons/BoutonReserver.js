import React from "react";
import Style from "./BoutonReserver.module.css";
import IconeReserver from "../../Images/iconeReserver.svg";

export default function Entete() {
  return (
    <a href="https://ballejaune.com/club/tcliverdun" target="_blank">
      <div className={Style.BoutonReserver}>
        <img className={Style.icone} src={IconeReserver} alt="" />
        <div className={Style.texteBouton}>
          <div className={Style.texteActionBouton}>Réserver un court</div>
          <div className={Style.texteSecondaire}>(Sur balle jaune)</div>
        </div>
      </div>
    </a>
  );
}
