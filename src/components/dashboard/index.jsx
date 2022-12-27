import React, { useEffect } from "react";
import { NavbarTop } from "../../style";
import { Fade } from "react-reveal";
import { Block } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getData, getProduct } from "../../redux/reducer/dashboard";
import RecentOrders from "../dash_blocks/recent_orders";
import Analiytics from "../dash_blocks/analiytics";
import Line_chart from "../dash_blocks/line_chart";
import Persentage_category from "../dash_blocks/persentage_category";
import DashboardBox from "../dash_blocks/box";
import { getChartData } from "../../redux/reducer/charts";

function Dashboard() {
  const dispatch = useDispatch();
  const {
    dashboard: { dashboard, create, dashboardyesterday, createyesterday },
  } = useSelector((state) => state);

  let todaySales = 0;
  let todayExpenses = 0;
  let todayVisitors = 0;
  let todayOrders = 0;

  let yesterdaySales = 0;
  let yesterdayExpenses = 0;
  let yesterdayVisitors = 0;
  let yesterdayOrders = 0;

  useEffect(() => {
    dispatch(getData());
    dispatch(getProduct());
    dispatch(getChartData());
  }, []);

  dashboard.map((item) => {
    item.productList.forEach((e) => {
      todaySales += parseInt(e.product.price);
    });
    item.productList.forEach((e) => {
      todayVisitors += parseInt(e.amount);
    });
  });

  create.map((item) => {
    todayExpenses += parseInt(item.price);
    todayOrders += parseInt(item.amount);
  });

  dashboardyesterday.map((item) => {
    item.productList.forEach((e) => {
      yesterdaySales += parseInt(e.product.price);
    });
    item.productList.forEach((e) => {
      yesterdayVisitors += parseInt(e.amount);
    });
  });

  createyesterday.map((item) => {
    yesterdayExpenses += parseInt(item.price);
    yesterdayOrders += parseInt(item.amount);
  });

  return (
    <>
      <Block>
        <NavbarTop>
          <div />
          <div className="user">
            <span></span>
            <div className="title">
              <b>User Name</b>
              <p>User Lastname</p>
            </div>
          </div>
        </NavbarTop>
        <div className="line">
          <>Dashboard</>
        </div>
        <div className="boxes">
          <DashboardBox
            iconclass={"i1"}
            icon={"tag-fill"}
            fragment={yesterdaySales}
            number={todaySales}
            name={"Today Sales"}
            isCurrensy={true}
          />
          <DashboardBox
            iconclass={"i2"}
            icon={"coin"}
            fragment={yesterdayExpenses}
            number={todayExpenses}
            name={"Today Expenses"}
            isCurrensy={true}
          />
          <DashboardBox
            iconclass={"i3"}
            icon={"people-fill"}
            fragment={yesterdayVisitors}
            number={todayVisitors}
            name={"Today Visitors"}
          />
          <DashboardBox
            iconclass={"i4"}
            icon={"cart3"}
            fragment={yesterdayOrders}
            number={todayOrders}
            name={"Today Orders"}
          />
        </div>
        <Fade>
          <div className="dash-line">
            <Fade left>
              <div className="box-lg shadow padding">
                <Line_chart />
              </div>
            </Fade>
            <Fade right>
              <div className="box-sl shadow padding">
                <Analiytics />
              </div>
            </Fade>
          </div>
          <div className="dash-line">
            <Fade left>
              <div className="box-lg shadow scroll">
                <RecentOrders />
              </div>
            </Fade>
            <Fade right>
              <div className="box-sl shadow padding">
                <Persentage_category />
              </div>
            </Fade>
          </div>
        </Fade>
      </Block>
    </>
  );
}

export default Dashboard;
