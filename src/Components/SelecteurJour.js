import React, { useState } from "react";
import MonStyle from "./SelecteurJour.module.css";

function ItemJour({ jour, itemSelectionne, onClick }) {
  var styleSelectedOrNot = {};

  if (jour === itemSelectionne) {
    styleSelectedOrNot = {
      fontWeight: 900,
      fontSize: "18px",
      color: "#17815C",
    };
  } else {
    styleSelectedOrNot = {
      fontWeight: 400,
      fontSize: "18px",
      color: "#97989D",
    };
  }

  return (
    <div style={styleSelectedOrNot} onClick={onClick}>
      {jour}
    </div>
  );
}

export default function SelecteurJour() {
  const [jourSelectionne, setJourSelectionne] = useState("Tous les jours");

  return (
    <div className={MonStyle.SelecteurJour}>
      <ItemJour
        jour={"Tous les jours"}
        itemSelectionne={jourSelectionne}
        onClick={(e) => setJourSelectionne(e.target.innerText)}
      />
      <ItemJour
        jour={"Lundi"}
        itemSelectionne={jourSelectionne}
        onClick={(e) => setJourSelectionne(e.target.innerText)}
      />
      <ItemJour
        jour={"Mardi"}
        itemSelectionne={jourSelectionne}
        onClick={(e) => setJourSelectionne(e.target.innerText)}
      />
      <ItemJour
        jour={"Mercredi"}
        itemSelectionne={jourSelectionne}
        onClick={(e) => setJourSelectionne(e.target.innerText)}
      />
      <ItemJour
        jour={"Jeudi"}
        itemSelectionne={jourSelectionne}
        onClick={(e) => setJourSelectionne(e.target.innerText)}
      />
      <ItemJour
        jour={"Vendredi"}
        itemSelectionne={jourSelectionne}
        onClick={(e) => setJourSelectionne(e.target.innerText)}
      />
      <ItemJour
        jour={"Samedi"}
        itemSelectionne={jourSelectionne}
        onClick={(e) => setJourSelectionne(e.target.innerText)}
      />
    </div>
  );
}
