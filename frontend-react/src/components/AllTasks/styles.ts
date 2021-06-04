import styled, {css} from "styled-components";
import { generateMedia } from "styled-media-query";
import media from "styled-media-query";

import Popup from 'reactjs-popup';
import { FaPlus } from "react-icons/fa";

interface ButtonProps {
  isEdit?: boolean;
}

interface ButtonPopupProps {
  isYes?: boolean;
}

const customMedia = generateMedia({
  laptopL: '1440px',
  laptop: '1024px',
  tablet: '768px',
  mobileL: '425px',
  mobileM: '375px',
  mobileS: '320px',
});

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 3em 10em;

  background: var(--background);
`;

const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    
  `}
`;

const TasksCards = styled.ul`
  width: 225px;
  height: 10em;

  padding: 2em;

  border: 1px solid var(--lightgray);
  border-radius: 10px;
  box-shadow: -3px 4px 9px 1px rgba(0,0,0,0.31);
  list-style: none;

  background: var(--white);
  color: var(--navyblue);

  animation: 0.5s showAnimation;
  transition: all 1s;

  h3 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @keyframes showAnimation {
    from {
      filter: opacity(0);
    }
    to {
      filter: opacity(1);
    }
  }
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

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-content"
  &-content {
    max-width: 400px;
    min-width: 300px;
    padding: 10px 20px;
    border-radius: 10px;

    animation: 0.5s showAnimationPopup;

    @keyframes showAnimationPopup {
    from {
      filter: opacity(0);
      transform: translateY(-50%);
    }
    to {
      filter: opacity(1);
      transform: translateY(0);
    }
  }
  }
`;

const PopupModal = styled.div`
  width: 100%;
`;

const PopupButtonClose = styled.button`
  width: 25px;
  height: 25px;

  position: absolute;
  top: 5px;
  right: 5px;

  background: var(--white);
  border: 1px solid var(--navyblue);
  border-radius: 5px;

  transition: all 0.2s;

  &:hover {
    color: var(--white);
    background: var(--redlava);
    border: none;
  }
`;

const PopupModalHeader = styled.div`
  margin-top: 10px;
`;

const PopupModalContent = styled.div`
margin-top: 20px;
`;

const PopupModalActions = styled.div`
  margin-top: 10px;
  button {
    margin-right: 20px;
  }
`;

const PopupButton = styled.button<ButtonPopupProps>`
  height: 2em;
  width: 100px;
  border: none;
  border-radius: 5px;

  background: var(--redlava);
  color: var(--simplewhite);

  ${({ isYes }) => isYes && css`
    background: var(--bluegrotto);
  `}
`;

const ContainerFaPlusSquare = styled(TasksCards)`
  display: flex;
  align-items: center;
  justify-content: center;

  animation: 1s showAnimation;
`;

const StyledFaPlusSquare = styled(FaPlus)`
  color: var(--bluegrotto);
  cursor: pointer;
`;

export { HomeContainer, TasksContainer, TasksCards, TasksButtons, Button, PopupModal, PopupButtonClose, PopupModalHeader, PopupModalContent, PopupModalActions, StyledPopup, PopupButton, StyledFaPlusSquare, ContainerFaPlusSquare }