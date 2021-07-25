import React from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaListAlt, FaAddressCard } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import {HeaderContainer} from "./style";

const Header = () =>{
  return(
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <nav>
        <Link to="/"> 
          <ImHome /> Página Inicial
        </Link>
        <Link to="/produtos">
          <FaListAlt /> Produtos
        </Link>
        <Link to="/clientes">
          <FaAddressCard /> Clientes
        </Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;