import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <CustomLink to="/"> Home</CustomLink>
      <CustomLink to="/reviews">Reviews</CustomLink>
      <CustomLink to="/dashboard">DashBoard</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>
  );
};

export default Header;
