import React from "react";
import LogoImage from "../Images/Logo.png";

const Style = {
  witdh: "80px",
  height: "80px",
};

export default function Logo() {
  return (
    <div>
      <img style={Style} src={LogoImage} alt="Logo tennis liverdun" />
    </div>
  );
}
