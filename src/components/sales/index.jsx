import React, { useState } from "react";
import { Block, Content } from "./style";
import { Table, Image, Button, Input, Modal, message, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  clearProducts,
  editQuantity,
  pullCart,
  saleProducts,
} from "../../redux/reducer/sales";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { numberFormat } from "../../utils";

function Sales() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    sales: { sales },
  } = useSelector((state) => state);
  const [state, setstate] = useState(false);

  function toggle() {
    setstate((p) => !p);
  }

  function counted(item, count) {
    dispatch(editQuantity({ ...item, quantity: count }));
  }

  function confirm() {
    message.info("Clicked on Yes.");
    navigate("/products");
    dispatch(clearProducts());
  }

  function remove(e) {
    message.info("Clicked on Yes.");
    dispatch(pullCart(e));
  }

  function checkout() {
    dispatch(saleProducts(sales));
    toast.success("Wow so easy!", {
      autoClose: 1000,
      onClose: () => navigate("/products"),
    });
    toggle();
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
      title: "Quantity",
      render: (e) => (
        <>
          <Input
            value={e.quantity}
            max={e.amount}
            onChange={(number) => counted(e, number.target.value)}
            style={{ width: "80px" }}
            type={"number"}
          />
        </>
      ),
    },
    {
      title: "Action",
      render: (e) => (
        <Popconfirm
          placement="topRight"
          title={"Do you want to remove"}
          onConfirm={() => remove(e)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            <i className="bi bi-cart-dash-fill" />
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Content>
      {sales.length === 0 ? (
        <img
          className="image"
          src="https://admin-dashboard-01.netlify.app/static/media/no.4a6b5f35.svg"
        />
      ) : (
        <Block>
          <div className="products">
            <Table
              columns={columns}
              dataSource={sales}
              pagination={false}
              rowKey="id"
            />
          </div>
          <div className="counter">
            <h2>Price</h2>
            <div className="body">
              <div>
                <label>Sub Total</label>
                <label>
                  {sales.reduce(function (accumulator, currentValue) {
                    return (
                      (accumulator + currentValue.price) * currentValue.quantity
                    );
                  }, 0)}{" "}
                  $
                </label>
              </div>
              <div>
                <label>Shipping</label>
                <label>Free</label>
              </div>
              <div>
                <label>Tax (18%) </label>
                <label>
                  {parseInt(
                    (sales.reduce(function (accumulator, currentValue) {
                      return (
                        (accumulator + currentValue.price) *
                        currentValue.quantity
                      );
                    }, 0) /
                      100) *
                      18
                  )}{" "}
                  $
                </label>
              </div>
              <div>
                <label style={{ fontWeight: "bold" }}>Total</label>
                <label style={{ fontWeight: "bold" }}>
                  {sales.reduce(function (accumulator, currentValue) {
                    return (
                      (accumulator + currentValue.price) * currentValue.quantity
                    );
                  }, 0) +
                    parseInt(
                      (sales.reduce(function (accumulator, currentValue) {
                        return (
                          (accumulator + currentValue.price) *
                          currentValue.quantity
                        );
                      }, 0) /
                        100) *
                        18
                    )}{" "}
                  $
                </label>
              </div>
            </div>
            <div className="btn">
              <Popconfirm
                placement="topRight"
                title={"Do you want to delete"}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <Button danger>All Clear</Button>
              </Popconfirm>
              <Button type="primary" ghost onClick={toggle}>
                Check Out
              </Button>
            </div>
          </div>
        </Block>
      )}
      <ToastContainer />
      <Modal onOk={checkout} open={state} onCancel={toggle}>
        <h2>Awesome</h2>
        <p>You ready to proceed using</p>
      </Modal>
    </Content>
  );
}

export default Sales;
