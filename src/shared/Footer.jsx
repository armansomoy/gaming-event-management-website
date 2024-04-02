import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0F1B33] text-center py-12">
      <img src={logo} alt="" className="m-auto" />
      <p className="text-[#fff] pt-6">
        @2024 All Copywrite by{" "}
        <Link target="_blank" to="https://besomoy.com/">besomoy.com</Link>{" "}
      </p>
    </div>
  );
};

export default Footer;
