import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Piyush Singh ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
