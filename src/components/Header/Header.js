import React from "react";
import mainLogo from "../../images/nav.png";

function HeaderComponent() {
  return (
    <header className="imageSrc">
      <img src={mainLogo} alt="company-logo" style={{ width: "10rem" }} />
    </header>
  );
}

export default HeaderComponent;
