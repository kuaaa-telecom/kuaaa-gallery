import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

const HeaderConatiner = styled.div`
  width: 100%;
  height: 96px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dddddd;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 4px;
  z-index: 1000;
  font-family: Pretendard;
`;

const HomeText = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderConatiner>
      <HomeText href={import.meta.env.BASE_URL}>밤하늘 저장소</HomeText>
    </HeaderConatiner>
  );
};

export default Header;
