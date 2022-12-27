import React, { useEffect } from "react";
import { Pie, G2 } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducer/charts";

function Persentage_category() {
  const G = G2.getEngine("canvas");
  const dispatch = useDispatch();
  const {
    charts: { category },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  let smartphoneArray = [];
  let watchArray = [];
  let headphoneArray = [];

  category.map((item) => {
    if (item.category === "smartphone") {
      smartphoneArray.push(item);
    }
    if (item.category === "watch") {
      watchArray.push(item);
    }
    if (item.category === "headphone") {
      headphoneArray.push(item);
    }
  });

  const data = [
    {
      type: "Smartphone",
      value: parseInt((100 / 18) * smartphoneArray.length),
    },
    {
      type: "Watch",
      value: parseInt((100 / 18) * watchArray.length),
    },
    {
      type: "Headphone",
      value: parseInt((100 / 18) * headphoneArray.length),
    },
  ];

  const cfg = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    legend: false,
    label: {
      type: "spider",
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 0,
            y: 25,
            text: `${data.value}%`,
            fill: "rgba(0, 0, 0, 0.65)",
            fontWeight: 700,
          },
        });
        return group;
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  const config = cfg;
  return (
    <div style={{ height: "90%" }}>
      <h2>Visit Customers</h2>
      <Pie {...config} />
    </div>
  );
}

export default Persentage_category;
