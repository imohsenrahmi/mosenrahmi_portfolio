import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown(props) {
  console.log(props);
  return (
    <>
      <li tabIndex="0">
      

        <div className="font-bold  flex flex-row z-0  justify-end">
          <Link to={props.route} >{props.name}</Link>
          <svg
            class="fill-current "
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path d={props.path} />
          </svg>
        </div>
      </li>
    </>
  );
}
