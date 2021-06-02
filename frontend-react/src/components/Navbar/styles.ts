import styled from "styled-components";

const NavContainer = styled.nav`
  width: 100vw;
  height: 4em;

  padding: 0 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--simplewhite);
  background: var(--royalblue);

  button {
    border: none;
    color: var(--simplewhite);
    background: var(--royalblue);
  }
`;

const NavLinks = styled.div`
  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin: 0 10px;
    cursor: pointer;
  }
`;

export { NavContainer, NavLinks }