import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${require("../../assets/back.jpg")});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Register = styled.div`
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  color: #ffffff;
  i {
    font-size: 60px;
    color: #ffffff;
  }
  input {
    height: 45px;
    border-radius: 10px;
  }
  button {
    margin: 20px 0 0 0;
    width: 100%;
    border-radius: 10px;
    height: 45px;
    background: #006cc5;
    color: #ffffff;
    &:hover {
      background: #ffffff;
      color: #1e1e1e;
    }
  }
  .line {
    width: 100%;
    margin: 3px 0;
  }
  p {
    color: red;
  }
  .ant-input-affix-wrapper {
    height: 45px;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  .ant-input {
    height: 40px;
  }
`;
