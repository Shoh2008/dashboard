import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  .line {
    display: flex;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
    .first {
      width: 700px;
      background: #ffffff;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
      label {
        font-size: 20px;
      }
      input {
        height: 50px;
      }
      textarea {
        width: 100%;
        height: 100px;
        outline: none;
        border-radius: 2px;
        border: 1px solid #d9d9d7;
        padding: 10px;
        border-radius: 10px;
        &::placeholder {
          color: #bfbfbd;
        }
      }
      .img {
        width: 100%;
        background: #f4f6f6;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border: 1px dotted grey;
        img {
          width: 45%;
        }
      }
      .file_input {
        display: none;
      }
    }
    .second {
      width: 360px;
      background: #ffffff;
      border-radius: 5px;
      padding: 20px;
      label {
        margin-top: 20px;
        font-size: 20px;
      }
      input {
        margin-bottom: 10px;
      }
      button {
        width: 100%;
        height: 45px;
        margin-top: 10px;
        font-size: 20px;
        background: #25a86e;
      }
      div {
        border-radius: 10px;
      }
    }
    .margin {
      margin: 20px 0;
    }
    div {
      width: 100%;
    }
    .drop {
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 100px;
      }
      p {
        width: 150px;
      }
    }
    .shadow {
      box-shadow: 0px 0px 10px -3px rgba(34, 60, 80, 0.2);
    }
    .imagebutton {
      position: relative;
      margin: auto;
      left: 50%;
      transform: translate(-50%);
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 750px) {
    padding: 20px;
    .line {
      padding: 15px 0;
    }
    .box {
      .second {
        width: 100%;
        margin: 20px 0;
        margin-bottom: 50px;
      }
    }
  }
`;
