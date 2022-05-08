import React, { Component } from "react";
import me from "../../assets/photos/me.jpg";

export default class Profile extends Component {
  render() {
    return (
      <>
        <div className="w-full  flex flex-row justify-center">
          <div className="w-2/3  text-center flex flex-col justify-center">
            <div class="avatar flex mb-10  indicator ml-auto mr-auto">
              <span class="indicator-item badge bg-green-700 font-bold">
                About Me
              </span>
              <div class="w-32 h-32 rounded-full">
                <img src={me} />
              </div>
            </div>
            <div className="text-2xl  text-center ml-auto mr-auto text-white uppercase font-bold ">
              درباره من
            </div>
            <p className="text-gray-300 mt-10 text-xl font-light	">
              من ، محسن رحمی توسعه دهنده وبسایت <br />
              در بخش فرانت اند هستم . تحصص اصلی من فریمورک ری اکت است
              <br />
              همچنین من دانش آموخته رشته مهندسی کامپیوتر گرایش نرم افزار از
              دانشگاه لرستان هستم
              <br />
              علاوه بر طراحی و توسعه دهنده وب سایت ، علاقه زیادی به انجام پروژه
              های دانشجویی
              <br /> رشته کامپیوتر دارم و در این زمینه بسیار فعالیت داشته ام
            </p>
            <button class="btn bg-green-700  ml-auto mr-auto my-5 ">
              دانلود رزومه من
            </button>
          </div>
        </div>
      </>
    );
  }
}
