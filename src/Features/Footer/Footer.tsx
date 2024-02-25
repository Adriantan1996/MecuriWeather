import React, { FC } from "react";
import "./Footer.css";

interface FooterProps {
  title: string;
}

const Footer: FC<FooterProps> = ({ title }) => {
  return (
    <footer className="footer" data-testid="Footer">
      <h1>{title}</h1>
    </footer>
  );
};

export default Footer;
