import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  .line {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    input {
      width: 200px;
      background: #e3e3e1;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card {
    height: 400px;
    width: 350px;
    border-radius: 15px;
    margin: 10px;
    padding: 7px 10px;
    border: 1px solid #e1e1e1;
    background: #ffffff;
    .head {
      height: 120px;
      width: 100%;
      background: #e3e3e3;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      margin: 3px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: space-between;
      padding: 10px;
      i {
        font-size: 40px;
        color: #5e5e5e;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          height: 40px;
          width: 130px;
          border-radius: 10px;
          background: #ffffff;
          display: flex;
          align-items: center;
          i {
            font-size: 20px;
            margin: 0 10px;
          }
        }
      }
    }
    .body {
      height: 190px;
      width: 100%;
      background: #e3e3e3;
      margin: 3px 0;
      overflow: scroll;
      &::-webkit-scrollbar {
        background: #f1f1f1;
        width: 10px;
        height: 0;
      }
      &::-webkit-scrollbar-thumb {
        background: grey;
      }
    }
    .foot {
      height: 60px;
      width: 100%;
      background: #e3e3e3;
      margin: 3px 0;
      padding: 10px;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        height: 40px;
        width: 150px;
        border-radius: 10px;
        background: #ffffff;
        display: flex;
        align-items: center;
        i {
          font-size: 20px;
          margin: 0 10px;
        }
        b {
          margin: 0 5px;
        }
      }
    }
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .count {
      display: flex;
      margin: 0 10px;
    }
  }
  @media screen and (max-width: 750px) {
    .footer {
      margin-bottom: 50px;
    }
  }
`;
