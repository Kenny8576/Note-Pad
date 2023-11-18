import React from "react";

function Footer () {

    const date = new Date();
    const year =date.getFullYear();

    return (
        <div>
        <footer>
        <p>copyright ⓒ {year}</p>
        </footer>
          
        </div>
    );
}

export default Footer;