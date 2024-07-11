import React from "react";

const Pricetag = ({ price }) => {
  return (
    <span className="p-1 px-2 rounded-md bg-fourthColor text-[12px] font-semibold">
      {price}
    </span>
  );
};

export default Pricetag;
