import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  .line {
    display: flex;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    button {
      background: orange;
      color: white;
    }
    input[type="date"] {
      color: white;
      background: #0aa5ff;
    }
    input {
      width: 200px;
    }
    div {
      display: flex;
      b {
        margin: 10px;
        font-size: 12px;
      }
    }
  }
  .foot {
    width: 100%;
    overflow: scroll;
    padding-bottom: 50px;
    background: #ffffff;
    &::-webkit-scrollbar {
      background: #e3e3e3;
      width: 0;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #ffffff;
    }
  }
  @media screen and (max-width: 750px) {
    .line {
      justify-content: space-between;
      div {
        display: flex;
        flex-wrap: wrap;
        b {
          margin: 0;
        }
      }
      input[type="date"] {
        width: 150px;
      }
      .ant-select {
        width: 150px !important;
      }
      button {
        width: 120px;
        margin: 10px 0;
      }
    }
    input,
    button {
      height: 40px;
      width: 100%;
      border-radius: 10px;
    }
  }
  .product,
  .price,
  .amount,
  .created {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const Upload = styled.label`
  width: 100%;
  height: 120px;
  border-radius: 5px;
  cursor: pointer;
  background: #f3f3f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 150px;
  }
  h3 {
    font-weight: bold;
  }
  input {
    display: none;
  }
`;
