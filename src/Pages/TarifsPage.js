import React from "react";
import Titre from "../Components/Titre";
import BlocTarifs from "../Components/BlocTarifs";
import Data from "../data/dataTarifs";

export default function TarifsPages() {
  let tarifs = Data;

  return (
    <div className="Pages">
      <Titre texte={"Tarifs 2022 - 2023"} />
      {tarifs.map((groupeTarif, index) => (
        <BlocTarifs groupeTarif={groupeTarif} key={index} />
      ))}
    </div>
  );
}
