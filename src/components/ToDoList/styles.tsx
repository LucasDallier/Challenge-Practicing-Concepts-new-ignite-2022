import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: #1a1a1a;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 12.5rem;

  background: #0d0d0d;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

export const ContentForm = styled.div`
  display: flex;
  align-items: center;

  margin-top: -30px;

  form {
    display: flex;
    align-items: center;

    gap: 10px;

    > input {
      width: 40rem;
      height: 3.375rem;

      padding: 20px;

      background: #262626;
      color: #808080;

      border-color: #0d0d0d;

      border-radius: 8px;
    }

    > button {
      display: flex;
      align-items: center;

      width: 5.625rem;
      height: 3.25rem;

      outline: none;

      border: none;

      font-size: 14px;
      font-weight: bold;

      color: #ffff;
      background: #1e6f9f;

      > svg {
        margin-left: 5px;
      }
    }
  }
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 65px;
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > span {
      font-size: 14px;
      font-weight: bold;

      color: #4ea8de;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 23px;
      height: 20px;

      padding: 3px;

      border: none;
      border-radius: 999px; /*999px igual ao figma*/
      outline: none;

      font-size: 12px;
      font-weight: bold;

      background: #333333;
      color: #d9d9d9;
    }
  }
`;
