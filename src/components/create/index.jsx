import React, { useRef, useState } from "react";
import { Block } from "./style";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/reducer/orders";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select } from "antd";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Fade } from "react-reveal";

function Create() {
  const [validations, setvalidations] = useState({
    productName: "",
    description: "",
    amount: "",
    category: "",
    price: "",
  });
  const [state, setstate] = useState({});
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();
  const navigate = useNavigate();

  function postData() {
    if (
      state.productName &&
      state.description &&
      state.amount &&
      state.category &&
      state.price
    ) {
      dispatch(
        createProduct({ ...state, createdAt: new Date(), imageId: img })
      );
      toast.success("Wow so easy created!", {
        autoClose: 1000,
        onClose: () => navigate("/orders"),
      });
    }
  }

  const i1 = (e) =>
    e.length === 0
      ? setvalidations((p) => ({ ...p, productName: "This field is invalid" }))
      : setvalidations((p) => ({ ...p, productName: "" }));
  const i2 = (e) =>
    e.length === 0
      ? setvalidations((p) => ({ ...p, description: "This field is invalid" }))
      : setvalidations((p) => ({ ...p, description: "" }));
  const i3 = (e) =>
    e.length === 0
      ? setvalidations((p) => ({ ...p, price: "This field is invalid" }))
      : setvalidations((p) => ({ ...p, price: "" }));
  const i4 = (e) =>
    e.length === 0
      ? setvalidations((p) => ({ ...p, category: "This field is invalid" }))
      : setvalidations((p) => ({ ...p, category: "" }));
  const i5 = (e) =>
    e.length === 0
      ? setvalidations((p) => ({ ...p, amount: "This field is invalid" }))
      : setvalidations((p) => ({ ...p, amount: "" }));

  function getImg(e) {
    let data = new FormData();
    data.append("image", e);
    axios
      .post("http://78.46.253.40:8080/api/v1/attachment", data)
      .then((res) => {
        setImg(res.data);
      });
  }

  return (
    <Block>
      <div className="line">
        <>Create a new Product</>
      </div>
      <div className="box">
        <Fade bottom>
          <div className="first shadow">
            <div>
              <label>Product Name</label>
              <Input
                status={validations.productName !== "" ? "error" : ""}
                onKeyUp={(e) => i1(e.currentTarget.value)}
                type={"text"}
                placeholder="Product Name"
                value={state.productName}
                onChange={(e) =>
                  setstate((p) => ({ ...p, productName: e.target.value }))
                }
              />
              <p style={{ color: "red" }}>{validations.productName}</p>
            </div>
            <div className="margin">
              <label>Description</label>
              <textarea
                style={
                  validations.description !== ""
                    ? { border: "1px solid red" }
                    : {}
                }
                placeholder="Description"
                value={state.description}
                onKeyUp={(e) => i2(e.currentTarget.value)}
                onChange={(e) =>
                  setstate((p) => ({ ...p, description: e.target.value }))
                }
              />
              <p style={{ color: "red" }}>{validations.description}</p>
            </div>
            <label>Add Image</label>
            <div className="img" onClick={() => ref.current.click()}>
              {img === "" ? (
                <div className="drop">
                  <img src={require("../../assets/creat.png")} />
                  <div>
                    <h3>Drop or Select file</h3>
                    <p>Drop file here or click browse thorough your machine</p>
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
              <Button className="imagebutton" onClick={() => setImg("")}>
                Delete Image
              </Button>
            )}
            <input
              ref={ref}
              type="file"
              className="file_input"
              id="file"
              onChange={(e) => getImg(e.target.files[0])}
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="second shadow">
            <div>
              <label>Product Price</label>
              <Input
                status={validations.price !== "" ? "error" : ""}
                onKeyUp={(e) => i3(e.currentTarget.value)}
                type={"number"}
                placeholder="Product Price"
                value={state.price}
                onChange={(e) =>
                  setstate((p) => ({ ...p, price: e.target.value }))
                }
              />
              <p style={{ color: "red" }}>{validations.price}</p>
            </div>
            <div className="margin">
              <label>Select Category</label>
              <Select
                status={validations.category !== "" ? "error" : ""}
                onSelect={(e) => i4(e.currentTarget.value)}
                placeholder="Category"
                value={state.category}
                onChange={(e) => setstate((p) => ({ ...p, category: e }))}
              >
                <Select.Option value="watch">Watch</Select.Option>
                <Select.Option value="smartphone">Smartphone</Select.Option>
                <Select.Option value="headphone">Headphone</Select.Option>
              </Select>
              <p style={{ color: "red" }}>{validations.category}</p>
            </div>
            <div className="margin">
              <label>Product Amount</label>
              <Input
                status={validations.amount !== "" ? "error" : ""}
                onKeyUp={(e) => i5(e.currentTarget.value)}
                type={"number"}
                placeholder="Amount"
                value={state.amount}
                onChange={(e) =>
                  setstate((p) => ({ ...p, amount: e.target.value }))
                }
              />
              <p style={{ color: "red" }}>{validations.amount}</p>
            </div>
            <Button type="primary" onClick={postData} htmlType="submit">
              Create Product
            </Button>
          </div>
        </Fade>
      </div>
      <ToastContainer />
    </Block>
  );
}

export default Create;
