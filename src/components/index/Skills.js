import React from "react";

export default function Skills(props) {
  return (
    <div className="bg-dark-cyan py-10">
      <div>
        <div className="uppercase email text-5xl text-center email">Skills</div>
        <div className="flex text-white flex-col w-full lg:flex-row pb-16 pt-2 ">
          <div className="grid flex-grow text-center   card  rounded-box place-items-center">
            <h1 className="font-bold  email text-bold text-2xl mt-10">
              مهارت ها
            </h1>
            <p className="mt-10 text-xl">
              در این بخش شما می توانید مهارت های من را مشاهده نمایید
              <br />
              علاوه بر این مهارت ها ، من زبان های <br />
              C , C++ , Matlab , C# <br /> را در حد انجام پروژه های دانشجویی بلد
              هستم و در صورت نیاز به کمک <br /> در حل پروژه های دانشجویی در خدمت
              شما خواهم بود
            </p>
          </div>

          <div className="grid flex-grow card mt-16  rounded-box sm:ml-auto sm:mr-auto place-items-start">
            {props.value.map((v, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-row-reverse justify-center  mb-2"
                >
                  <p>{v.name}</p>
                  <progress
                    class="progress progress-info   mr-5 ml-5 mt-2  w-56"
                    value={v.value}
                    max="100"
                  ></progress>
                  <p className="flex justify-center">{v.value} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
