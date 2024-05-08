import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return <img src="/images/caribswap/logo.png" height="20px" width="20px" alt="logo" />;
};

export default Icon;
