import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          top: "80%",
          left: "50%",
          transform: "translate(-10%, 0%)",
          padding: "70px 0px",
        }}
      >
        <InfinitySpin
          visible={true}
          width="200"
          color="#ddc0b4"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    </>
  );
};

export default Loader;
