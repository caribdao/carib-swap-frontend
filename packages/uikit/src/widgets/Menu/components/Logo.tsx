import React, { useContext } from "react";
import { keyframes, styled } from "styled-components";
import Flex from "../../../components/Box/Flex";
// import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    ${({ theme }) => theme.mediaQueries.xl} {
      display: none;
    }
  }
  .desktop-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.xl} {
      display: block;
    }
  }
  .logoText {
    margin-top: 10px;
    margin-bottom: 10px;
    display: none;
    justify-self: flex-end;
    text-align: center;
    margin-left: 10px;
    color: #AC8CCC;

     ${({ theme }) => theme.mediaQueries.xl} {
      display: flex;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <img src="/images/caribswap/logo.png" width="64px" height="32px" alt="logo" />
      <span className="logoText">CARIB Swap</span> 
    </>
  );

  return (
    <Flex alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);
