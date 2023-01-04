import Layout from "Components/Layout";
import Seo from "Components/Seo";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

interface IprojectProps {}

const INFO = [
  {
    id: 1,
    title: "McDonalds",
    git: "https://github.com/pildrums/mcDonalds",
    url: "https://pildrums.github.io/mcDonalds/",
    description:
      "리액트의 심화과정을 공부하고 처음 직접 작업한 맥도날드 랜딩페이지입니다. 이 프로젝트를 통해서 컴포넌트 리팩토링의 중요성을 배웠습니다. 리액트를 제대로 배우기 위해서 최대한 라이브러리의 도움없이 오직 구글링과 저의 프로그래밍 지식으로만 만들어습니다. 기존의 작업방식의 문제점들을 고칠 수 있었던 소중한 프로젝트입니다.",
    periods: "2021.12.25 ~ 2022.02.05",
    stack: "React(JS) / Styled-Components",
  },
  {
    id: 2,
    title: "Pilflix",
    git: "https://github.com/pildrums/Pilflix",
    url: "https://pildrums.github.io/Pilflix/",
    description:
      "노마드코더의 React-MasterClass 강의를 보면서 타입스크립트로 구성한 프로젝트입니다. 강의에 과제로 남겨둔 부분은 구글링을 통해서 직접 구현했습니다. 현재 UI와 상태관리 라이브러리를 Recoil로 교체를 위해 다시 기획 중입니다.",
    periods: "2022.12.13 ~ 2022.12.29",
    stack: "React(TS) / Styled-Components / Framer-Motion",
  },
];

export default function project() {
  return (
    <Layout>
      <Seo title="프로젝트" />
      <Wrapper>
        <Title>프로젝트</Title>
        <List>
          {INFO.map((item) => (
            <Item
              variants={itemVars}
              whileHover="hover"
              exit="exit"
              key={item.id}
            >
              <ItemTitle>{item.title}</ItemTitle>
              <ItemImage>
                <ItemContainer>
                  <span>{item.description}</span>
                  <span>제작기간: {item.periods}</span>
                  <span>{item.stack}</span>
                  <ItemButtonContainer>
                    <ItemButton href={item.url}>바로가기</ItemButton>
                    <ItemButton href={item.git}>Github</ItemButton>
                  </ItemButtonContainer>
                </ItemContainer>
              </ItemImage>
            </Item>
          ))}
        </List>
      </Wrapper>
    </Layout>
  );
}

const itemVars = {
  hover: {
    y: -20,
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.4)",
  },
  exit: {
    y: 0,
  },
};

const Wrapper = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.orange};
  padding-bottom: 120px;
`;

const Title = styled.h1`
  font-size: 40px;
  border-bottom: 1px solid ${(props) => props.theme.black.veryDark};
  color: ${(props) => props.theme.black.darker};
  font-weight: 600;
  margin-top: 120px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  margin-top: 40px;
`;

const Item = styled(motion.div)`
  background: ${(props) => props.theme.white.lighter};
  padding: 30px 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ItemTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
`;

const ItemImage = styled.div`
  width: 600px;
  height: 450px;
  background: coral;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ItemContainer = styled.div`
  width: inherit;
  height: inherit;
  padding: 0 50px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  &:hover {
    opacity: 1;
  }
  span {
    font-size: 16px;
  }
`;

const ItemButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ItemButton = styled(Link)`
  background: ${(props) => props.theme.black.darker};
  padding: 8px 16px;
  color: #fff;
  font-size: 18px;
`;
