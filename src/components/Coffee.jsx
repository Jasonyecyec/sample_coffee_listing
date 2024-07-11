import React from "react";
import Pricetag from "./Pricetag";
import PopularTag from "./PopularTag";
import Star from "../assets/Star.svg";
import StarFill from "../assets/Star_fill.svg";

const Coffee = ({ data }) => {
  return (
    <div className="w-full space-y-3">
      <div className="relative">
        {data.popular && <PopularTag />}
        <img className="rounded-lg w-full " src={data.image} />
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold text-white ">{data.name}</p>
        <Pricetag price={data.price} />
      </div>

      <div className="flex justify-between text-sm items-center font-semibold">
        <div className="flex  space-x-1 items-center">
          <div>
            <img src={data.rating ? StarFill : Star} />
          </div>

          <p className="text-white">
            {data.rating}{" "}
            {data.rating ? (
              <span className="text-thirdColor">({data.votes} votes)</span>
            ) : (
              <p className="text-thirdColor"> No ratings</p>
            )}
          </p>
        </div>

        {!data.available && (
          <p className="font-semibold text-sixthColor">Sold out</p>
        )}
      </div>
    </div>
  );
};

export default Coffee;
