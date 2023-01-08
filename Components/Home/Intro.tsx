import styled from "styled-components";

interface IIntroProps {}

export default function Intro() {
  return <Wrapper bgphoto="assets/intro-image.png" />;
}

const Wrapper = styled.div<{ bgphoto: string }>`
  width: 100%;
  padding: 250px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.brown.lighter};
  background-image: url(${(props) => props.bgphoto});
  background-position: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.yellow.lighter};
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
  background: ${(props) => props.theme.yellow.lighter};
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
