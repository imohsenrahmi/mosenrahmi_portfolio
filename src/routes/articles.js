import React from "react";
import Navbar from "../components/index/Navbar";

function Articles() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        className="py-64 ml-auto mr-auto text-center "
        style={{ backgroundColor: "#16222B" }}
      >
        <h1 className="text-4xl text-gray-200 underline tracking-tight	 mt-16  font-bold">
          به زودی بخش مقالات راه اندازی خواهد شد
        </h1>
        <h1 className="text-gray-200 text-xl tracking-widest	 mt-10 font-bold">
          و شما می توانید مقاله با موضوعات <br />
          برنامه نویسی ، ارز دیجیتال و تکنولوژی <br />
          را در اینجا مطالعه کنید
        </h1>
      </div>
    </>
  );
}

export default Articles;
