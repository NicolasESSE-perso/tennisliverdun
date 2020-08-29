import React from "react";

const Style = {
  marginBottom: "20px",
};

export default function Titre({ texte }) {
  return (
    <div className="Titre" style={Style}>
      {texte}
    </div>
  );
}
