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
        <div className="Texte">Regis BALENDRET (C'est le président)</div>
        <div>06.81.85.19.73 / 06.65.49.00.17</div>
        <a href="mailto:liverdun.tennisclub@gmail.com">
          liverdun.tennisclub@gmail.com
        </a>
        <div>17, rue des pinsons - 54380 SAIZERAIS</div>
        <Separateur />
      </div>

      <div>
        <div className="Titre2">Court couvert</div>
        <div className="Texte">Allée de Bretagne 54460 LIVERDUN.</div>{" "}
        <div className="Texte">Surface : Bois peint hyper rapide 🎾🚀☄️</div>
        <div className={MonStyle.illustrations}>
          <img className={MonStyle.image} src={ImageMapInterieur} alt="" />
          <img className={MonStyle.image} src={ImageCourtInterieur} alt="" />
        </div>
        <Separateur />
      </div>

      <div>
        <div className="Titre2">Courts extérieurs</div>
        <div className="Texte">
          Rue Eugène Lérebourg 54460 LIVERDUN (suivre direction CAMPING)
        </div>
        <div className="Texte">Surfaces : 2 Schistes • 3 Mateflex</div>
        <div className={MonStyle.illustrations}>
          <img className={MonStyle.image} src={ImageMapExterieur} alt="" />
          <img className={MonStyle.image} src={ImageCourtsExterieurs} alt="" />
        </div>
        <Separateur />
      </div>
    </div>
  );
}
