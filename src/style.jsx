import styled from "styled-components";

export const LayOut = styled.div`
  display: flex;
  input,
  button {
    border-radius: 10px;
    height: 40px;
  }
  .ant-select-selector {
    height: 40px !important;
    border-radius: 10px !important;
    display: flex;
    align-items: center;
  }
  .productline {
    display: flex;
    align-items: center;
    .img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      border: 4px solid #1e1e1e3f;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 90%;
        height: 90%;
      }
    }
  }
`;
export const NavbarLeft = styled.div`
  height: 100vh;
  width: 230px;
  top: 0;
  border-right: 1px solid #e1e1e1;
  .name {
    width: 100%;
    height: 70px;
    padding: 10px 30px;
    h1 {
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
  }
  .active {
    background: #ebf6fe !important;
    color: #2da5ff !important;
  }
  .foot {
    position: absolute;
    bottom: 30px;
    left: 10px;
    span {
      border-radius: 10px;
      width: 90%;
      padding: 15px;
      margin: 0 25px;
      font-size: 18px;
      font-weight: bold;
      color: grey;
      cursor: pointer;
      transition: 0.5s;
      display: flex;
      p {
        margin: 0;
      }
      i {
        margin: 0 5px;
      }
      &:hover {
        background: #e1e1e199;
      }
    }
  }
  @media screen and (max-width: 750px) {
    height: 55px;
    width: 100%;
    position: absolute;
    z-index: 10;
    border-top: 1px solid #e1e1e1;
    top: 100%;
    transform: translateY(-100%);
    display: flex;
    background: #ffffff;
    padding: 0 20px;
    .name {
      display: none;
    }
    .body {
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      span {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          display: none;
        }
      }
    }
    .active {
      background: #ebf6fe !important;
      color: #2da5ff !important;
    }
    .foot {
      bottom: 2px;
      left: calc(100% - 70px);
      width: 50px;
      right: 5px;
      top: 0;
      span {
        position: relative;
        z-index: 15;
        width: 50px;
        height: 50px;
        display: flex;
        margin: 2px;
        justify-content: center;
        align-items: center;
        p {
          display: none;
        }
      }
    }
  }
`;
export const Block = styled.div`
  width: calc(100% - 230px);
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
export const NavbarTop = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  height: 70px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: #ffffff;
  div {
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user {
    height: 60px;
    display: flex;
    align-items: center;
    span {
      height: 50px;
      border: 5px solid #1e1e1e70;
      width: 50px;
      border-radius: 50%;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e2e2e2;
    }
    .title {
      padding: 7px 0;
      width: 130px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
  @media screen and (max-width: 750px) {
    .user {
      .title {
        width: 60px;
        b,
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;
export const Component = styled.div`
  background: #fafaf7;
  height: 100vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
