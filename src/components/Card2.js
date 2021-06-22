import React from "react";

const Card1 = ({ data }) => {
  return (
    <div className="col-md-2 c2-container">
      <img src={data.pic} alt="c2p1" />
      <button>{data.desc}</button>
    </div>
  );
};

export default Card1;
