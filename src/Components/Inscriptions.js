import React from "react";
import Style from "./Inscriptions.module.css";
import BoutonTenUp from "../Components/Boutons/BoutonTenUp";

export default function Inscriptions() {
  return (
    <div className={Style.Inscriptions}>
      <p className="Titre2">Inscriptions 2022 - 2023</p>
      Bonjour, Nous vous proposons de venir nous retrouver pour la nouvelle
      saison 2024, lors des jours d'inscription suivant: - Samedi 2 septembre de
      10h à 12h - Vendredi 8 septembre de 18h à 20h. - Dimanche 10 septembre
      lors de la journée des associations ( avec animations) de 9h30 à 17h. Les
      inscriptions se dérouleront dans notre salle couverte derrière l'espace
      Champagne. Pour tout besoin d'informations vous pouvez contacter Séveirne
      au 06 81 85 19 73 Très sportivement. R BALANDRET Le Président.
      <br />
      <BoutonTenUp
        hauteur="50px"
        largeur="280px"
        texte="Inscription en ligne"
      />
    </div>
  );
}
