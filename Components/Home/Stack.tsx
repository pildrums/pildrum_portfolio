import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Frontend from "./Stack/Frontend";
import Backend from "./Stack/Backend";
import MobileApp from "./Stack/MobileApp";
import Version from "./Stack/Version";
import Communication from "./Stack/Communication";
import Deployment from "./Stack/Deployment";

interface IStackProps {}

const STATUS = [
  {
    id: 1,
    title: "80 ~ 100%(학습 완료)",
    green: true,
    yellow: false,
    red: false,
  },
  {
    id: 2,
    title: "40 ~ 80%(학습 중)",
    green: false,
    yellow: true,
    red: false,
  },
  {
    id: 3,
    title: "0 ~ 40%(학습 시작)",
    green: false,
    yellow: false,
    red: true,
  },
];

export default function Stack() {
  return (
    <Wrapper>
      <Title>Stack</Title>
      <Status>
        {STATUS.map((item) => (
          <StatusList key={item.id}>
            <Circle green={item.green} yellow={item.yellow} red={item.red} />
            <span>{item.title}</span>
          </StatusList>
        ))}
      </Status>
      <Content>
        <Frontend />
        {/* <Backend /> */}
        {/* <MobileApp /> */}
        <Version />
        <Communication />
        <Deployment />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.yellow.darker};
`;

const Title = styled.h1`
  font-size: 40px;
  border-bottom: 4px solid ${(props) => props.theme.black.veryDark};
  color: ${(props) => props.theme.black.darker};
  font-weight: 600;
  height: 56px;
  margin-bottom: 40px;
`;

const Status = styled.div`
  margin-bottom: 40px;
  color: ${(props) => props.theme.black.lighter};
  display: flex;
  gap: 20px;
`;

const StatusList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  span {
    font-weight: 400;
    font-size: 18px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Circle = styled.div<{ green?: boolean; yellow?: boolean; red?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  ${(props) =>
    props.green &&
    css`
      background: ${props.theme.green.lighter};
    `}
  ${(props) =>
    props.yellow &&
    css`
      background: ${props.theme.yellow.lighter};
    `}
  ${(props) =>
    props.red &&
    css`
      background: ${props.theme.red};
    `}
`;
