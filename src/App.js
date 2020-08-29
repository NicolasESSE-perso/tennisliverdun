import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from "./Pages/News";
import EcoleTennisPage from "./Pages/EcoleTennisPage";
import AdresseContactPage from "./Pages/AdresseContactPage";
import TarifsPage from "./Pages/TarifsPage";
import MenuMobilePage from "./Pages/Mobile/MenuMobilePage";
import ImageFond from "./Images/ImageFond.svg";
import Entete from "./Components/Entete";
import NavBarre from "./Components/NavBarre";
import BoutonMenuMobile from "./Components/Boutons/BoutonMenuMobile";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="BoutonMenuMobile">
          <BoutonMenuMobile />
        </div>
        <div className="Entete">
          <Entete />
        </div>
        <div className="NavBarre">
          <NavBarre />
        </div>

        <img className="ImageFond" src={ImageFond} alt="" />
        <Route path="/" exact component={News} />
        <Route path="/ecole" component={EcoleTennisPage} />
        <Route path="/adresse" component={AdresseContactPage} />
        <Route path="/tarifs" component={TarifsPage} />
        <Route path="/menu" component={MenuMobilePage} />
      </div>
    </Router>
  );
}

export default App;
