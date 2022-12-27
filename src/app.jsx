import { Modal } from "antd";
import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Create from "./components/create";
import Dashboard from "./components/dashboard";
import History from "./components/history";
import LogOut from "./components/log_out";
import Orders from "./components/orders";
import Products from "./components/products";
import Sales from "./components/sales";
import { LayOut, NavbarLeft, Component, Block } from "./style";
import Boardlink from "./utils/boardlink";

function App() {
  const navigate = useNavigate();
  const [key, setKey] = useState(false);

  function log_out() {
    localStorage.setItem("dashboardStoreLogIn", "false");
    navigate("/log-out");
    toggle();
  }

  function toggle() {
    setKey((p) => !p);
  }

  return (
    <>
      {localStorage.getItem("dashboardStoreLogIn") == "true" ? (
        <LayOut>
          <NavbarLeft>
            <div className="name">
              <h1>Logo</h1>
            </div>
            <div className="body">
              <Boardlink path={"/"} icon={"grid-fill"} title={"Dashboard"} />
              <Boardlink path={"/orders"} icon={"cart-fill"} title={"Orders"} />
              <Boardlink
                path={"/products"}
                icon={"bag-fill"}
                title={"Products"}
              />
              <Boardlink
                path={"/create"}
                icon={"plus-square-fill"}
                title={"Create"}
              />
              <Boardlink
                path={"/history"}
                icon={"file-text-fill"}
                title={"History"}
              />
            </div>
            <div className="foot">
              <span onClick={toggle}>
                <i className="bi bi-box-arrow-right" />
                <p>Log Out</p>
              </span>
            </div>
          </NavbarLeft>
          <Block>
            <Component>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/products" element={<Products />} />
                <Route path="/create" element={<Create />} />
                <Route path="/history" element={<History />} />
                <Route path="/sales" element={<Sales />} />
              </Routes>
            </Component>
          </Block>

          <Modal onOk={log_out} open={key} onCancel={toggle}>
            <h3>Do you want to exit the dashboard</h3>
          </Modal>
        </LayOut>
      ) : (
        <LogOut />
      )}
    </>
  );
}

export default App;
