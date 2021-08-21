import React from "react";
import Style from "./Inscriptions.module.css";
import BoutonTenUp from "../Components/Boutons/BoutonTenUp";

export default function Inscriptions() {
  return (
    <div className={Style.Inscriptions}>
      <p className="Titre2">Inscriptions 2021</p>
      <div className="Titre3">
        <span role="img" aria-label="ball">
          🎾
        </span>{" "}
        Vendredi 10 septembre{" "}
      </div>
      <div className="Texte"> de 18 H à 20 H (terrain couvert)</div>
      <br />
      <div className="Titre3">
        {" "}
        <span role="img" aria-label="ball">
          🎾
        </span>{" "}
        Samedi 11 septembre{" "}
      </div>
      <div className="Texte">à partir de 10 à 12 H (terrain couvert)</div>
      <br />
      <div className="Titre3">
        <span role="img" aria-label="ball">
          🎾
        </span>{" "}
        Animation-découverte du tennis : le Samedi 11 septembre
      </div>
      <div className="Texte"> de 10 H à 12H (terrain couvert)</div>
      <br />

      <div className="Titre3">
        <span role="img" aria-label="ball">
          🎾
        </span>{" "}
        Journée des associations : le Dimanche 12 Septembre
      </div>
      <div className="Texte"> de 9 H à 17 H (salle champagne)</div>
      <br />
      <div className="Titre3">
        <span role="img" aria-label="ball">
          🎾
        </span>{" "}
        Animation-découverte du tennis : le Dimanche 12 septembre
      </div>
      <div className="Texte"> de 9 H à 17H (terrain couvert)</div>
      <br />
      <BoutonTenUp
        hauteur="50px"
        largeur="280px"
        texte="Inscription en ligne"
      />
    </div>
  );
}
