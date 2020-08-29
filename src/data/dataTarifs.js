let groupesTarifs = [
  {
    groupe: "Mini-tennis",
    texte: "pour les enfants nés de 2015 à 2017",
    tarifs: [
      {
        libelle: "Mini-tennis",
        commentaire: "(Adhésion comprise)",
        montant: "90 €",
      },
    ],
  },
  {
    groupe: "Jeunes",
    texte:
      "pour les enfants nés en 2003 et après. (accès au court couvert sous la responsabilité d'un adulte)",
    tarifs: [
      {
        libelle: "Licence jeune",
        commentaire: "(Obligatoire)",
        montant: "20 €",
      },
      {
        libelle: "Accès courts couverts et extérieurs",
        commentaire: "(sous la responsabilité d'un adulte)",
        montant: "62 €",
      },
      {
        libelle: "Accès court couvert uniquement",
        commentaire: "(sous la responsabilité d'un adulte)",
        montant: "34 €",
      },
      {
        libelle: "Accès courts extérieurs uniquement",
        commentaire: "",
        montant: "28 €",
      },
      {
        libelle: "Ecole de tennis",
        commentaire: "(1heure)",
        montant: "80 €",
      },
      {
        libelle: "Ecole de tennis compétition",
        commentaire: "(1heure 30)",
        montant: "120 €",
      },
      {
        libelle: "T-shirt Club Ecole de tennis ",
        commentaire: "(obligatoire)",
        montant: "15 €",
      },
    ],
  },
  {
    groupe: "Etudiants",
    texte: "nés de 1996 à 2003",
    tarifs: [
      {
        libelle: "Licence",
        commentaire: "(Obligatoire)",
        montant: "30 €",
      },
      {
        libelle: "Adhésion étudiant",
        commentaire: "(courts intéreur et extérieurs)",
        montant: "68 €",
      },
      {
        libelle: "Accès court couvert uniquement",
        commentaire: "",
        montant: "34 €",
      },
      {
        libelle: "Accès courts extérieurs uniquement",
        commentaire: "",
        montant: "34 €",
      },
      {
        libelle: "Cours confirmés, débutants...",
        commentaire: "(nécessite une adhésion)",
        montant: "130 €",
      },
    ],
  },
  {
    groupe: "Adultes",
    texte: "nés avant 2003",
    tarifs: [
      {
        libelle: "Licence",
        commentaire: "(Obligatoire)",
        montant: "30 €",
      },
      {
        libelle: "Adhésion adulte",
        commentaire: "(Tarif couple 124 € par personne)",
        montant: "144 €",
      },
      {
        libelle: "Accès court couvert uniquement",
        commentaire: "(Tarif couple 62 € par personne)",
        montant: "72 €",
      },
      {
        libelle: "Accès courts extérieurs uniquement",
        commentaire: "(Tarif couple 62 € par personne)",
        montant: "72 €",
      },
      {
        libelle: "Cours confirmés, débutants...",
        commentaire: "(nécessite une adhésion)",
        montant: "282 €",
      },
      {
        libelle: "T-shirt du club",
        commentaire: "",
        montant: "20 €",
      },
    ],
  },
];

module.exports = groupesTarifs;
