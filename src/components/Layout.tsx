import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const LayoutContainer = styled.div`
  position: relative;
  background-color: #282828;
  padding-top: 96px;
  min-height: calc(100vh - 96px);
  font-family: Pretendard;
`;

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
