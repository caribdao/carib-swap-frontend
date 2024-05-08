import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import { vars } from "../../../css/vars.css";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
     <>
      <img src="/images/caribswap/logo.png" width="11%" alt="logo" />
    </>
  );
};

export default Logo;
