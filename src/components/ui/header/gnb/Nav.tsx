import { NavEventType } from "@customTypes/layout";
import styled from "styled-components";
import BottomMenu from "./BottomMenu";
import TopMenu from "./TopMenu";

const MainNavStyle = styled.nav<{ $isShowNav: boolean }>`
  display: ${(props) => props.$isShowNav && "grid"};
  grid-template-columns: ${(props) => props.$isShowNav && "repeat(7, 1fr)"};
  width: 800px;
  text-align: center;
`;

const Nav = ({ $isShowNav }: NavEventType) => {
  return (
    <MainNavStyle $isShowNav={$isShowNav}>
      <TopMenu $isShowNav={$isShowNav} />
      {$isShowNav && <BottomMenu $isShowNav={$isShowNav} />}
    </MainNavStyle>
  );
};
export default Nav;
