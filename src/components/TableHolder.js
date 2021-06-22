import React from "react";
import Card1 from "./Card1";

const TableHolder = ({ data, title = "PROGRAM BENEFITS" }) => {
  return (
    <div className="table">
      <h1>{title}</h1>
      {data.map((x, key) => (
        <Card1 key={key} data={x} />
      ))}
    </div>
  );
};

export default TableHolder;
