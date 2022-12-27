import styled from "styled-components";

export const Block = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .spinner-box {
    transform: translate(-50%, -50%);
    position: relative;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top: 4px solid #ff5722;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    &::before,
    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      border: 4px solid transparent;
    }
    &::before {
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-top-color: #ff9800;
      -webkit-animation: spin 3s linear infinite;
      animation: spin 3.5s linear infinite;
    }
    &::after {
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-top-color: #ffc107;
      -webkit-animation: spin 1.5s linear infinite;
      animation: spin 1.75s linear infinite;
    }
    @keyframes spin {
      from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;
