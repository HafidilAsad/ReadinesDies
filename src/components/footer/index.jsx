import React from "react";

import Link from "antd/es/typography/Link";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>
        Copyright &copy; 2014-{year} <Link to="#">PE Digitalisai</Link>.
      </strong>{" "}
      All rights reserved.
    </footer>
  );
};

export default Footer;
