import React, { useEffect, useRef, useState } from "react";
import { NavbarTop } from "../../style";
import { Block } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Image,
  Input,
  Modal,
  Select,
  Table,
  Popconfirm,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  editProduct,
  getProducts,
  deleteProduct,
} from "../../redux/reducer/orders";
import Loader from "../loader/loader";
import { numberFormat } from "../../utils";
import axios from "axios";

function Orders() {
  const [state, setstate] = useState({});
  const [img, setImg] = useState("");
  const [search, setsearch] = useState({
    productName: "",
    category: "",
    createdAt: "",
  });
  const [modalKey, setModalKey] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    orders: { data },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  function toggle() {
    setModalKey((p) => !p);
  }

  function startEdit(data) {
    setstate(data);
    toggle();
  }

  function finishEdit() {
    if (img) {
      dispatch(editProduct({ ...state, imageId: img }));
    } else {
      dispatch(editProduct(state));
    }
    setstate({});
    toggle();
  }

  function getImg(e) {
    let data = new FormData();
    data.append("image", e);
    axios
      .post("http://78.46.253.40:8080/api/v1/attachment", data)
      .then((res) => {
        setImg(res.data);
      });
  }

  function confirm(id) {
    dispatch(deleteProduct(id));
  }

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
        <div style={{ display: "flex" }}>
          <Button type="primary" onClick={() => startEdit(e)}>
            <i className="bi bi-pen" />
          </Button>
          <Popconfirm
            placement="topRight"
            title={"Do you want to delete"}
            onConfirm={() => confirm(e.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger style={{ margin: "0 5px" }}>
              <i className="bi bi-trash" />
            </Button>
          </Popconfirm>
        </div>
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
                <b>User Name</b>
                <p>User Lastname</p>
              </div>
            </div>
          </NavbarTop>
          <div className="line">
            <div>
              <>Orders</>
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
            <Button onClick={() => navigate("/create")}>+ Add Product</Button>
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
              rowKey={"id"}
            />
          </div>

          <Modal
            title={"Edit Product"}
            onOk={finishEdit}
            open={modalKey}
            onCancel={toggle}
            style={{ top: "30px" }}
          >
            <h3>Product Name</h3>
            <Input
              type="text"
              value={state.productName}
              size="large"
              placeholder="Product name"
              onChange={(e) =>
                setstate((p) => ({ ...p, productName: e.target.value }))
              }
            />
            <h3>Product Price</h3>
            <Input
              type="text"
              value={state.price}
              size="large"
              placeholder="Product price"
              onChange={(e) =>
                setstate((p) => ({ ...p, price: e.target.value }))
              }
            />
            <h3>Product Amount</h3>
            <Input
              type="number"
              value={state.amount}
              size="large"
              placeholder="Product price"
              onChange={(e) =>
                setstate((p) => ({ ...p, amount: e.target.value }))
              }
            />
            <h3>Description</h3>
            <textarea
              style={{
                width: "100%",
                height: "100px",
                outline: "none",
                borderRadius: "2px",
                border: " 1px solid #d9d9d7",
                padding: "10px",
                borderRadius: "10px",
              }}
              type="number"
              value={state.description}
              size="large"
              placeholder="Description"
              onChange={(e) =>
                setstate((p) => ({ ...p, description: e.target.value }))
              }
            />
            <div
              style={{
                width: "100%",
                background: "#f4f6f6",
                borderRadius: "5px",
                cursor: "pointer",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                border: "1px dotted grey",
              }}
              onClick={() => ref.current.click()}
            >
              {img === "" ? (
                <div
                  style={{
                    width: "100%",
                    background: "#f4f6f6",
                    borderRadius: "5px",
                    cursor: "pointer",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dotted grey",
                    padding: "20px",
                  }}
                  onClick={() => ref.current.click()}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "100px" }}
                      src={`http://78.46.253.40:8080/api/v1/attachment/${state.imageId}`}
                    />
                    <div style={{ marginLeft: "15px" }}>
                      <h3>Drop or Select file</h3>
                      <p style={{ width: "150px" }}>
                        Drop file here or click browse thorough your machine
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={`http://78.46.253.40:8080/api/v1/attachment/${img}`}
                />
              )}
            </div>
            {img === "" ? (
              ""
            ) : (
              <Button
                style={{
                  position: "relative",
                  margin: "auto",
                  left: "50%",
                  transform: "translate(-50%)",
                  marginTop: "15px",
                }}
                onClick={() => setImg("")}
              >
                Delete Image
              </Button>
            )}
            <input
              ref={ref}
              type="file"
              style={{ display: "none" }}
              id="file"
              onChange={(e) => getImg(e.target.files[0])}
            />
          </Modal>
        </Block>
      )}
    </>
  );
}

export default Orders;
