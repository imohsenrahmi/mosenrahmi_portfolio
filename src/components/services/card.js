import React from "react";

export default function Card(props) {
  return (
    <>
      <div
        style={{ backgroundColor: "#0E1317" }}
        class="max-w-sm my-2 mx-2 lg:w-1/3 bg-none rounded-lg  shadow-lg "
      >
        <div
          style={{ backgroundColor: "#1D4433" }}
          class="flex flex-row m-2 justify-center p-3 mt-4"
        >
          <img class="rounded-t-lg w-32 " src={props.src} alt="" />
        </div>
        <div class=" p-5">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold text-center tracking-tight text-white">
              {props.name}
            </h5>
          </a>
          <p class="my-5 text-center font-normal text-gray-300 tracking-wide">
            {props.title}
          </p>
        </div>
      </div>
    </>
  );
}
