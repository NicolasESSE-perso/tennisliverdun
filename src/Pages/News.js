import React from "react";
import Titre from "../Components/Titre";
import News from "../Components/News";
import data from "../data/dataArticles";
import Inscriptions from "../Components/Inscriptions";
import Separateur from "../Components/Separateur";
import CovidEnfant from "../Components/CovidEnfant";

export default function HomePage() {
  let articles = data;
  return (
    <div className="Pages">
      <Titre texte={"News"} /> <Inscriptions />
      <Separateur />
      <CovidEnfant />
      <Separateur />
      {articles.map((article, index) => (
        <News key={index} article={article} />
      ))}
    </div>
  );
}
