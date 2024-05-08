import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
       <img src="/images/caribswap/logo.png" width="11%" alt="logo" />
    </Svg>
  );
};

export default Icon;
