import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  .products {
    width: 70%;
    height: 80vh;
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    overflow: scroll;
    &::-webkit-scrollbar {
      border-radius: 10px;
      background: #e3e3e3;
      width: 10px;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #ffffff;
      border-radius: 10px;
    }
    .product,
    .price,
    .amount,
    .created {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .counter {
    width: 25%;
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    height: 300px;
    h2 {
      margin: 5px 15px;
    }
    .body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: space-around;
      div {
        display: flex;
        width: 90%;
        padding: 5px;
        margin: 5px;
        justify-content: space-between;
        align-items: center;
        label {
          font-size: 20px;
        }
      }
    }
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }
  }
  @media screen and (max-width: 750px) {
    .products {
      width: 95%;
      height: 300px;
      overflow: scroll;
      &::-webkit-scrollbar {
        background: #e3e3e3;
        width: 10px;
        height: 0;
      }
      &::-webkit-scrollbar-thumb {
        background: #ffffff;
      }
    }
    .counter {
      width: 95%;
      margin: 50px 0;
    }
  }
`;
export const Content = styled.div`
  position: relative;
  height: 100vh;
  overflow: scroll;
  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::-webkit-scrollbar {
    background: #e3e3e3;
    width: 10px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff;
  }
`;
