import React, { useState } from "react";
import myPhoto from "../../assets/photos/mohsen.jpg";

export default function Start() {
  let [text, setText] = useState("ارتباط با من");
  return (
    <div className="welcome lg:mt-0 mt-16 z-10 ">
      <div className="Welcome-txt text-center">
        <div className="font-sans   antialiased  text-white   leading-normal  tracking-wider  ">
          <div className="max-w-4xl flex items-center h-auto  lg:h-screen flex-wrap mx-auto lg:my-0 ">
            <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg  lg:mt-5 lg:rounded-r-none shadow-2xl bg-none opacity-75 mx-6 lg:mx-0">
              <div className="p-4 md:p-12 text-center lg:text-center">
                <h1 className="text-3xl  font-bold pt-8 lg:pt-0 welcome-txt-name">
                  Mohsen Rahmi
                </h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-t-1 border-green-700 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-center">
                  برنامه نویس و توسعه دهنده وب سایت
                  <svg
                    className="h-4 ml-5 fill-current text-green-700 pr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                  </svg>
                </p>

                <p className="pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-center">
                  Iran Tehran
                  <svg
                    className="h-4 ml-5 fill-current text-green-700 pr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                  </svg>
                </p>

                <p className="pt-8 text-md font-bold text-center ">
                  سلام دوست عزیز
                  <br />
                  {""} به وبسایت شخصی {""}
                  <big className="welcome-txt-name">محسن رحمی</big>
                  {"  "}خوش اومدی{""}
                </p>
                <p className="pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-center">
                  Phone Number : 09337039971
                </p>
                <p className="pt-2 text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-center">
                  E-mail : imohsenrahmi@gmail.com
                </p>
                <div className="pt-12 pb-8 flex justify-center">
                  <button
                    onMouseLeave={() =>
                      setText((text = "راه های ارتباط با من "))
                    }
                    onMouseEnter={() =>
                      setText(
                        (text =
                          "با کلیک روی آیکون های زیر در شبکه اجتماعی مد نظر با من در تماس باشید")
                      )
                    }
                    className="bg-green-700  hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  >
                    {text}
                  </button>
                </div>

                <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center space-x-5 justify-center ">
                  <a
                    className="link"
                    href="t.me/mohsen_rahmii"
                    data-tippy-content="@telegram_handle"
                  >
                    <svg
                      className="h-9 mt-3 fill-current text-gray-600 hover:text-green-700"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Telegram</title>
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                    </svg>
                  </a>
                  <a
                    className="link"
                    href="https://www.instagram.com/mohsen_rahmii"
                    data-tippy-content="@instagram_handle"
                  >
                    <svg
                      className="h-6 fill-current text-gray-600 hover:text-green-700"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                  <a
                    className="link"
                    href="https://wa.me/0989337039971?text=(test text)"
                    data-tippy-content="@youtube_handle"
                  >
                    <svg
                      className="h-9 mt-3 fill-current text-gray-600 hover:text-green-700"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <title>whats App</title>
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full  lg:w-2/5 mt-5">
              <img src={myPhoto} className=" shadow-2xl hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
