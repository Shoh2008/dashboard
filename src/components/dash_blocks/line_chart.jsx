import React from "react";
import { Column } from "@ant-design/plots";
import { useSelector } from "react-redux";

function Line_chart() {
  const {
    charts: { analiytics },
  } = useSelector((state) => state);
  const data = analiytics;

  const config = {
    data,
    xField: "createdAt",
    yField: "price",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return (
    <div style={{ height: "90%" }}>
      <h2>Sales Overview</h2>
      <Column {...config} />
    </div>
  );
}

export default Line_chart;
