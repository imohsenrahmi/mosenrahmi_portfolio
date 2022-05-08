import React from "react";

const AaBase = (props) => {
  const tolozz = props.tools.map((tool) => {
    return (
      <img
        className="inline-block px-2 h-6 w-10"
        src={require("../../assets/media/" + tool + ".png")}
        title={tool}
        alt={tool}
        key={tool}
      />
    );
  });

  return (
    <div className="project">
      <div className="card">
        <div className="thumb">
          <img
            src={require("../../assets/media/" + props.image)}
            alt={props.image}
            className=" rounded h-60 bg-bottom "
          />
        </div>
        <div className="infos">
          <h1 className="title w-full m-b1">{props.title}</h1>
          <span>{tolozz}</span>
          <p className="txt text-gray-400 mt-5 py-2 border-t border-gray-600">
            {props.description}
          </p>
          {props.sourceCode ? (
            <button className="bg-transparent text-teal-700 font-semibold absolute bottom-0 left-0 m-4 py-2 px-4">
              <a
                href={props.sourceCode}
                rel="noopener noreferrer"
                target="_blank"
              >
                Source code
              </a>
            </button>
          ) : null}
          {props.site ? (
            <button className="bg-transparent text-teal-700 font-semibold absolute bottom-0 right-0 m-4 py-2 px-4">
              <a href={props.site} rel="noopener noreferrer" target="_blank">
                Visit
              </a>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AaBase;
