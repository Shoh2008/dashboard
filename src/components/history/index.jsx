import { Input, Table, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { getHistory } from "../../redux/reducer/history";
import Loader from "../loader/loader";
import { Block } from "./style";
import { numberFormat } from "../../utils";
import { NavbarTop } from "../../style";

function History() {
  const dispatch = useDispatch();
  const [search, setsearch] = useState("");
  const {
    history: { data },
  } = useSelector((state) => state);
  const [dataLength, setDataLength] = useState(0);
  const [rowsDataLength, setRowsDataLength] = useState(6);

  useEffect(() => {
    dispatch(getHistory());
  }, []);

  const columns = [
    { title: "№", render: (e, r, i) => <>{i + 1}</> },
    { title: "Name", render: (e) => <>{e.product.productName}</> },
    { title: "Amount", dataIndex: "amount" },
    {
      title: "Price",
      render: (e) => (
        <>
          <b>$</b>
          {e.product.price}
        </>
      ),
    },
  ];

  const showPage = (event) => {
    setDataLength(event);
  };

  const showCard = (event) => {
    setRowsDataLength(event);
    setDataLength(0);
  };

  return (
    <>
      {data.length !== 0 ? (
        <Loader />
      ) : (
        <Block>
          <NavbarTop>
            <div />
            <div className="user">
              <span></span>
              <div className="title">
                <b>User Name</b>
                <p>User Lastname</p>
              </div>
            </div>
          </NavbarTop>
          <div className="line">
            <>History</>
            <Input type={"date"} onChange={(e) => setsearch(e.target.value)} />
          </div>
          <div className="cards">
            {data
              .filter((item) =>
                search ? item?.createdAt?.substring(0, 10) === search : item
              )
              .slice(
                dataLength * rowsDataLength,
                dataLength * rowsDataLength + rowsDataLength
              )
              .map((item, index) => (
                <Fade bottom cascade>
                  <div className="card" key={index}>
                    <div className="head">
                      <i className="bi bi-cart-check" />
                      <div>
                        <span>
                          <i className="bi bi-calendar" />
                          {item.createdAt.substring(0, 10)}
                        </span>
                        <span>
                          <i className="bi bi-clock" />
                          {item.createdAt.substring(11, 19)}
                        </span>
                      </div>
                    </div>
                    <div className="body">
                      <Table
                        pagination={false}
                        columns={columns}
                        dataSource={item.productList}
                      />
                    </div>
                    <div className="foot">
                      <span>
                        <i className="bi bi-cart" />
                        All Products <b>{item.productList.length}</b>
                      </span>
                      <span>
                        <i className="bi bi-currency-dollar" />
                        Price{" "}
                        <b>
                          {numberFormat(
                            item.productList.reduce(
                              (total, dev) =>
                                (total += dev.product.price * dev.amount),
                              0
                            )
                          )}
                        </b>
                      </span>
                    </div>
                  </div>
                </Fade>
              ))}
          </div>
          <div className="footer">
            <Pagination
              total={data.length}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              onChange={(e) => showPage(e)}
              defaultCurrent={1}
              showSizeChanger={true}
              onShowSizeChange={(item, number) => showCard(number)}
              defaultPageSize={6}
              pageSizeOptions={[6, 12, 24, 48, 96]}
            />
          </div>
        </Block>
      )}
    </>
  );
}

export default History;
