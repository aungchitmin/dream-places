import React from "react";
import Image from "next/image";
import plane from "../public/plane.png";

const Filter = () => {
  return (
    <div className="warpper container bg-gray-100 shadow-lg  mx-auto p-10 my-10 flex">
      <div className="side1 flex-1">
        <h1 className="text-4xl font-bold text-left">
          I&apos;m planning to go to...
        </h1>
        <div className="options-wrapper mt-5 flex items-stretch justify-start gap-10">
          <div className="options1 flex flex-col items-start justify-start">
            <h3 className="text-lg font-semibold">TYPE</h3>
            <div className="inputs-wrapper flex items-start justify-start flex-col">
              <div className="flex items-center gap-2">
                <input type="radio" name="type" id="edm" />
                <label htmlFor="edm">EDM Festival</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="type" id="beach" />
                <label htmlFor="beach">Beach</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="type" id="city" />
                <label htmlFor="city">City</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="type" id="popular" />
                <label htmlFor="popular">Popular</label>
              </div>
            </div>
          </div>

          <div className="option2 flex flex-col items-start justify-start">
            <h3 className="text-lg font-semibold">TEMPERATURE</h3>
            <div className="inputs-wrapper flex items-start justify-start flex-col ">
              <div className="flex items-center gap-2">
                <input type="radio" name="temperature" id="hot" />
                <label htmlFor="hot">Hot</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="temperature" id="cold" />
                <label htmlFor="cold">Cold</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="temperature" id="temperate" />
                <label htmlFor="temperate">Temperate</label>
              </div>
            </div>
          </div>

          <div className="option3 flex flex-col items-center justify-start">
            <h3 className="text-lg font-semibold">FLIGHT</h3>
            <div className="inputs-wrapper flex items-start justify-start flex-col">
              <div className="flex items-center gap-2">
                <input type="radio" name="flight" id="long" />
                <label htmlFor="long">Long</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="flight" id="medium" />
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="flight" id="short" />
                <label htmlFor="short">Short</label>
              </div>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <button className="p-3 mt-5 text-gray-200 bg-teal-600 rounded">Tell Me Already!!!</button>
        </div>
      </div>

      <div className="side2 flex-1">
        <div className="border">
          <Image
            alt="plane"
            src={plane}
            width={500}
            height={281}
            priority
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
