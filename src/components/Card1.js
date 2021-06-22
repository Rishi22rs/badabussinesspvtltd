import React from "react";
import c1p1 from "../assets/c1p1.png";

const Card1 = ({ data }) => {
  return (
    <div className="table-content">
      <img src={data.pic} alt="c1p1" />
      <h3 className="ctext">{data.desc}</h3>
    </div>
  );
};

export default Card1;
