import React from "react";
import Style from "./BoutonMenuMobile.module.css";
import IconeBoutonMenuMobile from "../../Images/iconeMenuMobile.svg";
import { Link } from "react-router-dom";

export default function Entete() {
  return (
    <Link to="/menu">
      <div className={Style.Bouton}>
        <img src={IconeBoutonMenuMobile} alt="" />
      </div>
    </Link>
  );
}
