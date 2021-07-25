import {FooterContainer} from "./style";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () =>{
  return(
    <FooterContainer>
      <div className="copyright">
        <p>Projeto desenvolvido durante o programa HiringCoders2 para entrega do 2º desafio.</p>
        <span>&copy; Alguns Diretos Reservados</span>
      </div>
      <nav>
        <a href="https://github.com/andrewgustavo"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/andrew-gustavo-52190596/"><FaLinkedinIn /></a>
      </nav>
    </FooterContainer>
  );
}

export default Footer;