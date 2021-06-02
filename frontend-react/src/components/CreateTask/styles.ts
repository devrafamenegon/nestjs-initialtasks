import styled from "styled-components";

const CreateContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 4rem);

  padding: 2em 10vw;

  background: var(--background);
`;

const CreateBody = styled.div`
  width: 30%;

  margin-top: 30px;

  display: flex;
  flex-direction: column;

  span {
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
    width: 20%;
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
`;

export { CreateContainer, CreateBody }