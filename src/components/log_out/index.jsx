import React, { useRef, useState } from "react";
import { Button, Input } from "antd";
import { Block, Register } from "./style";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const [state, setstate] = useState({});
  const [validate, setvalidate] = useState({ name: "", password: "" });
  const navigate = useNavigate();
  const refA = useRef();
  const refB = useRef();

  function submit() {
    i1(refA.current.input.value);
    i2(refB.current.input.value);
    if (refA.current.input.value) setvalidate((p) => ({ ...p, name: "" }));
    if (refB.current.input.value) setvalidate((p) => ({ ...p, password: "" }));
    if (state.name == "shoxruh" && state.password == "shox2008") {
      localStorage.setItem("dashboardStoreLogIn", "true");
      navigate("/");
    }
  }

  const i1 = (e) =>
    e.length === 0
      ? setvalidate((p) => ({ ...p, name: "Name Is Invalid" }))
      : setvalidate((p) => ({ ...p, name: "" }));
  const i2 = (e) =>
    e.length === 0
      ? setvalidate((p) => ({ ...p, password: "Password Is Invalid" }))
      : setvalidate((p) => ({ ...p, password: "" }));

  return (
    <Block>
      <Register>
        <i className="bi bi-people-fill" />
        <div className="line">
          <label>Name</label>
          <Input
            ref={refA}
            status={validate.name !== "" ? "error" : ""}
            placeholder="shoxruh"
            onChange={(e) => setstate((p) => ({ ...p, name: e.target.value }))}
            onKeyUp={(e) => i1(e.currentTarget.value)}
          />
          <p>{validate.name}</p>
        </div>
        <div className="line">
          <label>Password</label>
          <Input.Password
            ref={refB}
            status={validate.password !== "" ? "error" : ""}
            placeholder="shox2008"
            onChange={(e) =>
              setstate((p) => ({ ...p, password: e.target.value }))
            }
            onKeyUp={(e) => i2(e.currentTarget.value)}
          />
          <p>{validate.password}</p>
        </div>
        <Button onClick={submit}>Log In</Button>
      </Register>
    </Block>
  );
}

export default LogOut;
