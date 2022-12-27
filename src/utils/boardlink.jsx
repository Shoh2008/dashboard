import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Boardlink = ({ path, icon, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const Line = styled.span`
    border-radius: 10px;
    width: 90%;
    padding: 15px;
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
    color: grey;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    p {
      margin: 0;
    }
    i {
      margin: 0 5px;
    }
    &:hover {
      background: #e1e1e199;
    }
  `;

  return (
    <Line
      className={location.pathname === path ? "active" : ""}
      onClick={() => navigate(path)}
    >
      <i className={`bi bi-${icon}`} />
      <p>{title}</p>
    </Line>
  );
};

export default Boardlink;
