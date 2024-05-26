import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return <img src="/cakelogo.png" height="20px" width="20px" alt="logo" />;
};

export default Icon;
