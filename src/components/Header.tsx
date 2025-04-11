import styled from "@emotion/styled";

const HeaderConatiner = styled.div`
  width: 100%;
  height: 96px;
  position: absolute;
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

const Header = () => {
  return <HeaderConatiner>KUAAA GALLERY</HeaderConatiner>;
};

export default Header;
