import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Mayank Agarwal {year}</p>
    </footer>
  );
}

export default Footer;
