import blackLogo from "@assets/blackLogo.svg";
import whiteLogo from "@assets/whiteLogo.svg";
import { NavEventType } from "@customTypes/layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLogoStyle = styled.h1`
  align-self: flex-start;
  padding: 15px 0;

  & > a {
    width: 100%;

    & > img {
      width: 89px;
    }
  }
`;

const Logo = ({ $isShowNav }: NavEventType) => {
  return (
    <HeaderLogoStyle>
      <Link to="/">
        <img src={$isShowNav ? blackLogo : whiteLogo} alt="logo" />
      </Link>
    </HeaderLogoStyle>
  );
};
export default Logo;
