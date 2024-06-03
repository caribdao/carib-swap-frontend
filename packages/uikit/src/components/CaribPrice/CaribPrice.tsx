import React from "react";
import { styled } from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  caribPriceUsd?: number;
  showSkeleton?: boolean;
  chainId: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  &:hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CaribPrice: React.FC<React.PropsWithChildren<Props>> = ({
  caribPriceUsd,
  color = "textSubtle",
  showSkeleton = true,
  chainId,
}) => {
  return caribPriceUsd ? (
     <PriceLink
      href={`/swap?outputCurrency=0x9f8b8FE01b26957cf3dcd6FBd3675053bA2c02C8&chainId=${chainId}`}
      target="_blank"
    >
      <LogoRound width="24px" mr="8px" />
      <Text color={color} bold>{` $${caribPriceUsd}`}</Text>
    </PriceLink> 
  ) : showSkeleton ? (
     <Skeleton width={80} height={24} />  
  ) : null;
};

export default React.memo(CaribPrice);
