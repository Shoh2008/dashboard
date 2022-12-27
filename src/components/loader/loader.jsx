import React from "react";
import { Block } from "./style";

function Loader() {
  return (
    <Block>
      <div className="spinner-box">
        <div className="spinner"></div>
      </div>
    </Block>
  );
}

export default Loader;
