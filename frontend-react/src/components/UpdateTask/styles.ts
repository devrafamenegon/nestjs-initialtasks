import styled from "styled-components";
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

const CreateContainer = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 32vh 2em 0 10em;

  background: var(--background);

  ${customMedia.lessThan("mobileL")`
      padding: 10em 2em;
  `}
`;

const CreateBody = styled.div`
  width: 600px;

  margin-top: 30px;

  display: flex;
  flex-direction: column;

  span {
    margin-top: 10px;
    padding-left: 5px;
    color: var(--navyblue);
  }

  input {
    margin-top: 5px;
    padding-left: 5px;

    border: none;
    border-bottom: 1px solid var(--navyblue);

    background: var(--simplewhite);

    &:focus {
      outline:none;
    }
  }

  button {
    width: 100px;
    margin-top: 20px;
    padding: 10px 2px;

    border: 1px solid var(--navyblue);
    border-radius: 10px;

    background: transparent;

    transition: all 0.2s;

    &:disabled {
      color: var(--navyblue);
      filter: opacity(0.25);

      cursor: not-allowed;
    }

    &:hover:enabled {
      border: 1px solid var(--royalblue);
      background: var(--royalblue);
      color: var(--simplewhite);
    }
  }

  ${customMedia.lessThan("laptop")`
    width: 80%;
  `}

  ${customMedia.lessThan("mobileL")`
    width: 100%;
  `}
`;

const StatusContainer = styled.div`
  margin-top: 10px;

  span {
    margin-bottom: 5px;
  }
`;

const StatusRadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;

  input {
    padding: 0;
    margin: 0px 5px 0px 5px;
  }
`;

export { CreateContainer, CreateBody, StatusContainer, StatusRadioContainer }