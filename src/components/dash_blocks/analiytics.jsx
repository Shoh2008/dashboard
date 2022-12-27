import React from "react";
import { Line } from "@ant-design/plots";
import { useSelector } from "react-redux";

function Analiytics() {
  const {
    charts: { analiytics },
  } = useSelector((state) => state);
  const data = analiytics;

  const config = {
    data,
    xField: "createdAt",
    yField: "price",
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };
  return (
    <div style={{ height: "90%" }}>
      <h2>Analytics</h2>
      <Line {...config} />
    </div>
  );
}

export default Analiytics;
