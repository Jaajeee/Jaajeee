import React from "react";
import './Navbar.css';

export default function NavBar() {
  const Menuitems = ['activity', 'data'];
  const NavLinks = Menuitems.map(Menuitems => {
    return (
      <a href={"/" + Menuitems}>
        {Menuitems}
        </a>
    )
  });
      return ( 
      <>
      <nav>
      {NavLinks}
      </nav>
      </>
  );
};