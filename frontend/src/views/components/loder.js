import React from "react";
import { ScaleLoader } from "react-spinners";
// import { css } from "@emotion/core";

// CSS  properties of loader
// const override = css`
//   display: block;
// `;

function Loader(props) {
  return (
    <>
      <div
        className="sweet-loading"
        style={{ textAlign: "center", marginTop: "5%" }}
      >
        <ScaleLoader
          // css={override}
          color={"blue"}
          height={100}
          loading={props.isLoaded}
        />
      </div>
    </>
  );
}

export default Loader;
