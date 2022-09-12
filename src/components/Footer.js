import React, { useEffect, useState } from "react";
import "./Footer.scss";

function Footer() {
  const [FooterList, setFooterList] = useState([]);

  useEffect(() => {
    fetch("/data/login.json")
      .then((Response) => Response.json())
      .then((result) => setFooterList(result));
  }, []);

  return (
    <div>
      <ul className="FooterList">
        {FooterList[0].footer.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
