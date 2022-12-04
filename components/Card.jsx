import React from "react";
import Image from "next/image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Card = ({ info }) => {
  return (
    <div className="card-wrapper flex-1 border w-full sm:w-1/2 lg:w-1/4 mb-3 mx-2 shadow-lg bg-gray-100">
      <div className="flex flex-col items-center justify-between w-full h-full">
        <div className="img&title-wrapper mb-4">
          <Image
            className="rounded"
            alt={info.title}
            src={info.url}
            width={500}
            height={350}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto",
            }}
          />
          <h1 className="text-xl p-3 font-bold text-left">{info.title}</h1>
        </div>
        <div className="cat-wrapper flex flex-wrap px-3 py-6 items-center justify-start gap-2">
          <div className="cat-1 flex items-center bg-gray-300 px-2 rounded">
            <LocalOfferIcon className="text-gray-500"/>
            <h3 className="text-lg p-1">
              {info.flight}
            </h3>
          </div>
          <div className="cat-2 flex items-center bg-gray-300 px-2 rounded">
            <LocalOfferIcon className="text-gray-500"/>
            <h3 className="text-lg p-1">
              {info.temperature}
            </h3>
          </div>
          <div className="cat-3 flex items-center bg-gray-300 px-2 rounded">
            <LocalOfferIcon className="text-gray-500"/>
            <h3 className="text-lg p-1">
              {info.type}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
