import React from "react";
import Logo from "./Logo";
import Style from "./Entete.module.css";

export default function Entete() {
  return (
    <div className={Style.Entete}>
      <div className={Style.TitreEtLogo}>
        <Logo />
        <div className={Style.NomSite}>Liverdun Tennis Club</div>
      </div>
    </div>
  );
}
