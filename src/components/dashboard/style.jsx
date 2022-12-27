import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  .product,
  .price,
  .amount,
  .created {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .line {
    display: flex;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
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
  .boxes {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .dash-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
  .box-lg {
    width: 58%;
    background: #ffffff;
    height: 300px;
    border-radius: 10px;
  }
  .box-sl {
    width: 40%;
    background: #ffffff;
    height: 300px;
    border-radius: 10px;
  }
  .scroll {
    overflow: scroll;
    &::-webkit-scrollbar {
      border-radius: 10px;
      background: #e3e3e3;
      width: 10px;
      height: 0;
    }
    &::-webkit-scrollbar-thumb {
      background: #ffffff;
      border-radius: 10px;
    }
  }
  .shadow {
    box-shadow: 0px 0px 10px -3px rgba(34, 60, 80, 0.2);
  }
  .padding {
    padding: 0 15px;
  }
  .status {
    background: #e4fbf2;
    color: #26d1a3;
    padding: 5px;
    border-radius: 20px;
    text-align: center;
  }
  table thead {
    position: sticky;
    z-index: 5;
    top: -1px;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: 50px;
    .line {
      padding: 10px;
    }
    .dash-line {
      .box-lg,
      .box-sl {
        width: 100%;
        margin: 10px 0;
      }
    }
  }
`;
export const Box = styled.div`
  border-radius: 10px;
  background: #ffffff;
  height: 150px;
  width: 250px;
  padding: 15px;
  margin: 10px 5px;
  .icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .i1 {
    background: #ebf6fe;
    color: #2da5ff;
  }
  .i2 {
    background: #f4ecfc;
    color: #7f44fb;
  }
  .i3 {
    background: #ffebfa;
    color: #ff36e0;
  }
  .i4 {
    background: #ffecec;
    color: #ff364b;
  }
  .line-second {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
  }
  .foot-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }
  .success {
    color: #00bf73;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .success-bg {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background: #def7ed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .danger {
    color: #ff410b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .danger-bg {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background: #ffebe2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
    margin: 10px;
  }
`;
