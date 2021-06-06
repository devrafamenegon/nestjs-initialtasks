import styled, {css} from "styled-components";
import { FaHome, FaPlusSquare } from "react-icons/fa";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktopL: "2560px",
  desktop: "1920px",
  laptopL: "1440px",
  laptop: "1024px",
  tablet: "768px",
  mobileL: "425px",
  mobileM: "375px",
  mobileS: "320px",
});

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

  ${customMedia.lessThan("mobileL")`
    width: 100vw;
    height: 4em;

    padding: 0;
    flex-direction: row;
    justify-content: space-evenly;

    button {
      margin-top: 0;
    }
  `}
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

  ${customMedia.lessThan("mobileL")`
    margin-top: 0;

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 15px;
    }
  `}
`;

const NavButton = styled.div`
  border: none;
  color: var(--simplewhite);
  background: var(--royalblue);
`;

const StyledFaHome = styled(FaHome)<NavButtonProps>`
  font-size: 50px;

  ${({ isActive }) => isActive && css`
    color: var(--navyblue);
  `}

  ${customMedia.lessThan("mobileL")`
    font-size: 40px;
  `}
`;

const StyledFaPlusSquare = styled(FaPlusSquare)<NavButtonProps>`
  font-size: 50px;

  ${({ isActive }) => isActive && css`
    color: var(--navyblue);
  `}

  ${customMedia.lessThan("mobileL")`
    font-size: 40px;
  `}
`;

export { NavContainer, NavLinks, NavButton, StyledFaHome, StyledFaPlusSquare }