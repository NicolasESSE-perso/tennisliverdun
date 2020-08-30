import React from "react";
import Logo from "./Logo";
import Style from "./Entete.module.css";
import { Link } from "react-router-dom";
import BoutonReserver from "../Components/Boutons/BoutonReserver";

export default function Entete() {
  return (
    <div className={Style.Entete}>
      <Link to="/">
        <div className={Style.TitreEtLogo} z-index="10">
          <Logo />
          <div className={Style.NomSite}>Liverdun Tennis Club</div>
        </div>
      </Link>
      <div className={Style.PositionBoutonReserver}>
        <BoutonReserver />
      </div>
    </div>
  );
}
