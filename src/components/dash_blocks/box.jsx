import React from "react";
import { numberFormat } from "../../utils";
import { Box } from "../dashboard/style";

function DashboardBox({ iconclass, icon, fragment, number, name, isCurrensy }) {
  const persent = (y, d) => (y < d ? d - y : y - d);

  return (
    <Box className="shadow">
      <div className={`icon ${iconclass}`}>
        <i className={`bi bi-${icon}`} />
      </div>
      <div className="line-second">
        {isCurrensy === true ? "$" : ""} {numberFormat(number)}
      </div>
      <div className="foot-line">
        <>{name}</>
        <div>
          {number % 100 < fragment % 100 ? (
            <div className="danger">
              <div className="danger-bg">
                <i className="bi bi-arrow-down-right" />
              </div>{" "}
              -{persent(fragment % 100, number % 100)}%
            </div>
          ) : (
            <div className="success">
              <div className="success-bg">
                <i className="bi bi-arrow-up-right" />
              </div>{" "}
              +{persent(fragment % 100, number % 100)}%
            </div>
          )}
        </div>
      </div>
    </Box>
  );
}

export default DashboardBox;
