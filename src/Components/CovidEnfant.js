import React from "react";

export default function CovidEnfant() {
  return (
    <div style={{ paddingBottom: "40px" }}>
      <div>
        <div className="Titre2">
          Questionnaire Covid 2021 (pour les mineurs)
        </div>
        <div>Il sera à remplir pour les inscriptions 2021</div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <a
          className="Lien"
          href="https://liverduntennisclub.s3.eu-central-1.amazonaws.com/documents/Questionnaire%20COVID%20Enfants.pdf"
        >
          Télécharger le questionnaire
        </a>
      </div>
    </div>
  );
}
