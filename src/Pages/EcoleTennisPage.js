import React from "react";
import Titre from "../Components/Titre";
import Separateur from "../Components/Separateur";
import Inscriptions from "../Components/Inscriptions";
//import SelecteurJour from "../Components/SelecteurJour";
//import JourEcoleTennis from "../Components/JourEcoleTennis";

export default function EcoleTennisPage() {
  return (
    <div className="Pages">
      <Titre texte={"Ecole de tennis"} />
      <p>
        <b>
          Les groupes et horaires de l'école de tennis seront affichés sur cette
          page, dès qu'ils seront construits suite aux inscriptions de
          septembre.
        </b>
      </p>
      <Separateur />
      <Inscriptions />
      <Separateur />
      Pour tout renseignement : enseignants.tennisclubliverdun@gmail.com, ou
      06.81.85.19.73
      {/*       <SelecteurJour />
      <JourEcoleTennis />
      <JourEcoleTennis />
      <JourEcoleTennis />*/}
    </div>
  );
}
