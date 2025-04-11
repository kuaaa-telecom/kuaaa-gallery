import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { IntersectionObserverProvider } from "../contexts/IntersectionObserverContext";

const LayoutContainer = styled.div`
  position: relative;
  background-color: #282828;
  padding-top: 96px;
  min-height: 100vh;
  font-family: Pretendard;
`;

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <IntersectionObserverProvider>
      <LayoutContainer>{children}</LayoutContainer>
    </IntersectionObserverProvider>
  );
};

export default Layout;
