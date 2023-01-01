import styled from "styled-components";

interface IIntroProps {}

export default function Intro() {
  return (
    <Wrapper>
      <Title>김필진_포트폴리오</Title>
      <Description>Frontend Enginner의 표준이 되고 싶은</Description>
      <Description>개발자 김필진입니다.</Description>
      <StyledButton>알아보기</StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.black.veryDark};
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.green.lighter};
  margin-bottom: 40px;
  user-select: none;
`;

const Description = styled.span`
  text-align: center;
  padding-bottom: 16px;
  user-select: none;
`;

const StyledButton = styled.button`
  padding: 10px 40px;
  background: #fff;
  border: none;
  margin-top: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;
