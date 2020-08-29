import React from "react";
import MonStyle from "./BlocTarifs.module.css";

function ListeTarifs({ tarifs }) {
  return (
    <div className={MonStyle.TableauTarifs}>
      {tarifs.map((ligne, index) => (
        <div className={MonStyle.LigneTarif}>
          <div className={MonStyle.DivTarifEtCommentaire}>
            <div className={MonStyle.TarifLibelle}>{ligne.libelle}</div>
            <div className={MonStyle.TarifCommentaire}>{ligne.commentaire}</div>
          </div>

          <div className={MonStyle.TarifMontant}>{ligne.montant}</div>
        </div>
      ))}
    </div>
  );
}

export default function BlocTarifs({ groupeTarif }) {
  return (
    <div>
      <div className="Titre2">{groupeTarif.groupe}</div>
      <div className="Texte">{groupeTarif.texte}</div>
      <ListeTarifs tarifs={groupeTarif.tarifs} />
    </div>
  );
}
