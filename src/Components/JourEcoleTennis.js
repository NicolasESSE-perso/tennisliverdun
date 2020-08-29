import React from "react";
import MonStyle from "./JourEcoleTennis.module.css";
import Separateur from "./Separateur";

function ListeParticipant() {
  return (
    <div className={MonStyle.TableauParticipants}>
      <div className={MonStyle.LignePartipant}>
        <div className={MonStyle.Heure}>18:00</div>
        <div className={MonStyle.Participant}>ESSE Nicolas</div>
        <div className={MonStyle.Commentaire}>Salle Multi-sport</div>
      </div>
      <div className={MonStyle.LignePartipant}>
        <div className={MonStyle.Heure}>18:00</div>
        <div className={MonStyle.Participant}>ESSE Nicolas</div>
        <div className={MonStyle.Commentaire}>Salle Multi-sport</div>
      </div>
      <div className={MonStyle.LignePartipant}>
        <div className={MonStyle.Heure}>18:00</div>
        <div className={MonStyle.Participant}>
          ESSE Nicolas super long jejejej
        </div>
        <div className={MonStyle.Commentaire}>Salle Multi-sport</div>
      </div>
    </div>
  );
}

export default function JourEcoleTennis() {
  return (
    <div className={MonStyle.JourEcoleTennis}>
      <div className="Titre2">Lundi</div>
      <div className="Texte">
        Commentaire du lundi : Lorem ipsum dolor sit amet, consectetur
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <ListeParticipant />
      <Separateur />
    </div>
  );
}
