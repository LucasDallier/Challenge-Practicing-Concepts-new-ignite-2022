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
  justify-content: center;

  margin-top: -30px;

  > form {
    width: 100%;
    display: flex;
    align-items: center;

    gap: 10px;

    > input {
      width: 100%;
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

  margin-bottom: 20px;

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
      border-radius: 999px; /*999px same as figma*/
      outline: none;

      font-size: 12px;
      font-weight: bold;

      background: #333333;
      color: #d9d9d9;
    }
  }
`;

export const ListTasks = styled.div`
  display: flex;
  width: 100%;
`;

export const Task = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 80px;

  gap: 8px;

  padding: 15px;

  background: #262626;

  border: 1px solid #333333;
  border-radius: 8px;
  /* 
  > input[type="radio"] {
    width: 18px;
    height: 18px;
    border: 1px solid #4ea8de;
  } */
  /* > input[type="checkbox"] {
    -webkit-appearance: none;
    align-self: baseline;
    width: 20px;
    height: 20px;
    border: 2px solid #4ea8de;
    border-radius: 50%;
    outline: none;
  }

  > input[type="checkbox"]:before {
    content: "";
    display: block;
    width: 60%;
    height: 60%;
    margin: 20% auto;
    border-radius: 50%;
    color: #5e60ce;
  } */

  /*Example of searched stylization*/
  .check {
    width: 24px;
    height: 24px;
    align-self: baseline;

    input {
      display: none;
      &:checked + .box {
        background-color: #5e60ce;
        border-color: #5e60ce;

        &:after {
          top: -1%;
        }
      }
    }

    .box {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
      border: 2px solid #4ea8de;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      &:after {
        content: "";

        width: 40%;
        height: 20%;
        position: absolute;
        border-left: 2px solid;
        border-bottom: 2px solid;
        border-color: #f2f2f2;
        transform: rotate(-45deg) translate3d(0, 0, 0);
        transform-origin: center center;
        transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
        left: 0;
        right: 0;
        top: 200%;
        bottom: 5%;
        margin: auto;
      }
    }
  }

  > span {
    display: inline-block;

    width: 93%;

    color: #f2f2f2;
  }

  > svg {
    align-self: baseline;

    color: #808080;
  }
`;
