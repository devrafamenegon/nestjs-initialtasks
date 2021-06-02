import styled, {css} from "styled-components";

interface ButtonProps {
  isEdit: boolean;
}

const HomeContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 4rem);

  padding: 2em 10vw;

  background: var(--background);
`;

const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

const TasksCards = styled.ul`
  width: 100%;
  height: 10em;

  padding: 2em;

  border: 1px solid var(--lightgray);
  border-radius: 10px;
  box-shadow: -3px 4px 9px 1px rgba(0,0,0,0.31);
  list-style: none;

  background: var(--white);
  color: var(--navyblue);
`;

const TasksButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 30px;
`;

const Button = styled.button<ButtonProps>`
  height: 2em;
  width: 40%;
  border: none;
  border-radius: 5px;

  background: var(--redlava);
  color: var(--simplewhite);

  ${({ isEdit }) => isEdit && css`
    background: var(--bluegrotto);
  `}
`;

export { HomeContainer, TasksContainer, TasksCards, TasksButtons, Button}