import React from "react";
import Titre from "../Components/Titre";
import Separateur from "../Components/Separateur";
import ImageMapInterieur from "../Images/mapInterieur.png";
import ImageMapExterieur from "../Images/mapExterieur.png";
import ImageCourtInterieur from "../Images/CourtInterieur.png";
import ImageCourtsExterieurs from "../Images/CourtsExterieurs.png";
import MonStyle from "./AdresseContactPage.module.css";

export default function AdresseContactPage() {
  return (
    <div className="Pages">
      <Titre texte={"Adresse et contacts"} />

      <div>
        <div className="Titre2">Contact</div>
        <div className="Texte">Regis LEPRESIDENT</div>
        <div>06 06 06 06 06</div>
        <div>meilleurpresident@gmail.com</div>
        <div>2 rue truc bidule du tennis 54460 LIVERDUN</div>
        <Separateur />
      </div>

      <div>
        <div className="Titre2">Court couvert</div>
        <div className="Texte">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className={MonStyle.illustrations}>
          <img className={MonStyle.image} src={ImageMapInterieur} alt="" />
          <img className={MonStyle.image} src={ImageCourtInterieur} alt="" />
        </div>

        <Separateur />
      </div>

      <div>
        <div className="Titre2">Courts extérieurs</div>
        <div className="Texte">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className={MonStyle.illustrations}>
          <img className={MonStyle.image} src={ImageMapExterieur} alt="" />
          <img className={MonStyle.image} src={ImageCourtsExterieurs} alt="" />
        </div>
        <Separateur />
      </div>
    </div>
  );
}
