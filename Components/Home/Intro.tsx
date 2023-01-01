import styled from "styled-components";

interface IIntroProps {}

export default function Intro() {
  return (
    <Wrapper>
      <Title>김필진 포트폴리오</Title>
      <Description>
        <span>Frontend Enginner의 표준이 되고 싶은</span>
        <span>개발자 김필진입니다.</span>
      </Description>
      <Underline />
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
  background: ${(props) => props.theme.brown.lighter};
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.yellow};
  margin-bottom: 40px;
  user-select: none;
`;

const Description = styled.div`
  text-align: center;
  padding-bottom: 16px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Underline = styled.div`
  width: 40px;
  height: 4px;
  background: ${props => props.theme.yellow};
  margin: 40px 0;
`;

const StyledButton = styled.button`
  padding: 10px 40px;
  background: #fff;
  border: none;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;
