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
      <li>Reprise des cours à partir du lundi 23 septembre 2020.</li>
      <li>
        {" "}
        L’école de tennis fonctionne au rythme du calendrier scolaire, les cours
        ne sont donc pas assurés pendant les vacances scolaires.{" "}
      </li>
      <li>
        Le nombre de séances varie (de 28 minimum à 31 séances) en fonction des
        jours fériés et des absences des professeurs.{" "}
      </li>
      <li>
        Les cours se déroulent au court couvert du 23/09/2020 aux vacances de
        printemps (soit au 24/04/2021)
      </li>
      <li>
        Les cours se déroulent aux courts extérieurs ( paquis) à partir du
        10/05/2021
      </li>
      <li>La fin des cours : samedi 19/06/2021</li>
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
