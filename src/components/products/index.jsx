import React, { useEffect, useState } from "react";
import { NavbarTop } from "../../style";
import { Block } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image, Input, Select, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/reducer/orders";
import { pullCart, pushCart } from "../../redux/reducer/sales";
import { numberFormat } from "../../utils";
import Loader from "../loader/loader";

function Products() {
  const [search, setsearch] = useState({
    productName: "",
    category: "",
    createdAt: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    sales: { sales },
    orders: { data },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const columns = [
    { title: "№", render: (e, r, i) => <>{i + 1}</> },
    {
      title: "Product",
      render: (e) => (
        <div className="productline">
          <div className="img">
            {e.imageId ? (
              <Image.PreviewGroup>
                <Image
                  style={{ borderRadius: "10px" }}
                  width={50}
                  src={`http://78.46.253.40:8080/api/v1/attachment/${e.imageId}`}
                />
              </Image.PreviewGroup>
            ) : (
              <img width={50} src={require("../../assets/no-product.webp")} />
            )}
          </div>
          <span style={{ margin: "0 5px" }} className="product">
            {e.productName}
          </span>
        </div>
      ),
    },
    {
      title: "Date",
      render: (e) => (
        <div className="created">
          {e.createdAt ? e.createdAt.substring(0, 10) : "####-##-##"}
        </div>
      ),
    },
    {
      title: "Amount",
      render: (e) => <div className="amount">{e.amount}</div>,
    },
    {
      title: "Price",
      render: (e) => <div className="price">$ {numberFormat(e.price)}</div>,
    },
    {
      title: "Action",
      render: (e) => (
        <>
          {sales.find((cartItem) => cartItem.id === e.id) ? (
            <Button
              style={{ background: "greenyellow", fontSize: "20px" }}
              onClick={() => dispatch(pullCart(e))}
            >
              <i className="bi bi-check-all" />
            </Button>
          ) : (
            <Button
              type="primary"
              style={{ fontSize: "20px" }}
              onClick={() => dispatch(pushCart({ ...e, quantity: 1 }))}
            >
              <i className="bi bi-cart-plus-fill" />
            </Button>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      {data.length === 0 ? (
        <Loader />
      ) : (
        <Block>
          <NavbarTop>
            <div>
              <Input
                type={"search"}
                placeholder="Search"
                onChange={(e) =>
                  setsearch((p) => ({ ...p, productName: e.target.value }))
                }
              />
            </div>
            <div className="user">
              <span></span>
              <div className="title">
                <b>Shohruh</b>
                <p>Abdumannobov</p>
              </div>
            </div>
          </NavbarTop>
          <div className="line">
            <div>
              <>Products</>
              <b>{data.length} order found</b>
            </div>
            <Input
              type={"date"}
              onChange={(e) =>
                setsearch((p) => ({ ...p, createdAt: e.target.value }))
              }
            />
          </div>
          <div className="line">
            <Select
              style={{ width: "200px" }}
              placeholder="Select a Category"
              onChange={(e) => setsearch((p) => ({ ...p, category: e }))}
            >
              <Select.Option value="">All</Select.Option>
              <Select.Option value="watch">Watches</Select.Option>
              <Select.Option value="smartphone">Smartphone</Select.Option>
              <Select.Option value="headphone">Headphone</Select.Option>
            </Select>
            <Button onClick={() => navigate("/sales")}>
              {" "}
              <b> Basket </b> <i className="bi bi-cart" />{" "}
              <b> {sales.length} </b>{" "}
            </Button>
          </div>
          <div className="foot">
            <Table
              columns={columns}
              dataSource={data
                .filter((item) =>
                  item.category
                    ? item.category
                        .toLowerCase()
                        .indexOf(search.category.toLowerCase()) > -1
                    : item
                )
                .filter((item) =>
                  item.productName
                    ? item.productName
                        .toLowerCase()
                        .indexOf(search.productName.toLowerCase()) > -1
                    : item
                )
                .filter((item) =>
                  search.createdAt
                    ? item?.createdAt?.substring(0, 10) === search.createdAt
                    : item
                )}
              rowKey="id"
            />
          </div>
        </Block>
      )}
    </>
  );
}

export default Products;
