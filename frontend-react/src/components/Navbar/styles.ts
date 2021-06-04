import styled, {css} from "styled-components";
import { FaHome, FaPlusSquare } from "react-icons/fa";

interface NavButtonProps {
  isActive: boolean;
}

const NavContainer = styled.nav`
  width: 4em;
  height: 100vh;

  padding: 0 50px;
  position: fixed;
  display: flex;
  flex-direction: column;

  align-items: center;

  color: var(--simplewhite);
  background: var(--royalblue);

  button {
    margin-top: 10vh;
    border: none;
    color: var(--simplewhite);
    background: var(--royalblue);
  }
`;

const NavLinks = styled.div`
  margin-top: 20vh;
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li {
    margin: 0 10px 30px 10px;
    cursor: pointer;
  }
`;

const NavButton = styled.div`
  border: none;
  color: var(--simplewhite);
  background: var(--royalblue);
`;

const StyledFaHome = styled(FaHome)<NavButtonProps>`
  
  ${({ isActive }) => isActive && css`
    color: var(--navyblue);
  `}
`;

const StyledFaPlusSquare = styled(FaPlusSquare)<NavButtonProps>`
  
  ${({ isActive }) => isActive && css`
    color: var(--navyblue);
  `}
`;

export { NavContainer, NavLinks, NavButton, StyledFaHome, StyledFaPlusSquare }