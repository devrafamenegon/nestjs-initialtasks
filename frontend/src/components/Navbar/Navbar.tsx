import React from "react";
import { NavContainer, NavLogo, NavLinks } from './Style';

export default function Navbar(){
  return(
    <NavContainer>

      <NavLogo>
        <a href="/">
          <h1>Tasks</h1>
        </a>
      </NavLogo>

      <NavLinks>
        <ul>
          <li>Home</li>
          <a href="/create">
            <li>Criar</li>
          </a>
        </ul>
      </NavLinks>

    </NavContainer>
  );
}