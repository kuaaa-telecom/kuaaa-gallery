import styled from "@emotion/styled";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cacaca;
  font-size: 16px;
  font-weight: 300;
  padding-top: calc(50svh - 96px);
`;

const NotFound = () => {
  return <MainContainer>사진이 존재하지 않습니다.</MainContainer>;
};

export default NotFound;
