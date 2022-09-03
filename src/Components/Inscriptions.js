import React from "react";
import Style from "./Inscriptions.module.css";
import BoutonTenUp from "../Components/Boutons/BoutonTenUp";

export default function Inscriptions() {
  return (
    <div className={Style.Inscriptions}>
      <p className="Titre2">Inscriptions 2022 - 2023</p>
      <div className="Titre3">
        <span role="img" aria-label="ball">
          🎾
        </span>{" "}
        Vendredi 2 septembre{" "}
      </div>
      <div className="Texte"> de 18 H à 20 H (terrain couvert)</div>
      <br />
      <div className="Titre3">
        {" "}
        <span role="img" aria-label="ball">
          🎾
        </span>{" "}
        Samedi 3 septembre{" "}
      </div>
      <div className="Texte">à partir de 10 à 12 H (terrain couvert)</div>
      <br />
      <div className="Titre3">
        <span role="img" aria-label="ball">
          🎾
        </span>{" "}
        Journée des associations : le Dimanche 11 Septembre
      </div>
      <div className="Texte"> de 9 H à 17H (terrain couvert)</div>

      <br />
      <strong style={{ color: "#a54516" }}>
        Pour les compétiteurs, votre inscription doit être faite avant le 5
        septembre afin de pouvoir participer aux championnats par équipe.
      </strong>
      <br />

      <br />
      <BoutonTenUp
        hauteur="50px"
        largeur="280px"
        texte="Inscription en ligne"
      />
    </div>
  );
}
