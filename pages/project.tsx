import Layout from "Components/Layout";
import Seo from "Components/Seo";
import Link from "next/link";
import styled from "styled-components";

interface IprojectProps {}

export default function project() {
  return (
    <Layout>
      <Seo title="프로젝트" />
      <Wrapper>
        <List>
          <Title>프로젝트</Title>
          <Item>
            <ItemTitle>McDonald</ItemTitle>
            <Description>
              <span>제작기간: 2022.12.13 ~ 2022.12.29</span>
              <span>설명: 노마드코더의 강의를 보고 제작한 프로젝트입니다.</span>
            </Description>
            <More href="https://pildrums.github.io/Pilflix/">바로가기</More>
            <More href="https://github.com/pildrums/Pilflix">Github</More>
          </Item>
          <Item>
            <ItemTitle>Pilflix(Netflix)</ItemTitle>
            <Description>
              <span>제작기간: 2022.12.13 ~ 2022.12.29</span>
              <span>설명: 노마드코더의 강의를 보고 제작한 프로젝트입니다.</span>
            </Description>
            <More href="https://pildrums.github.io/Pilflix/">바로가기</More>
            <More href="https://github.com/pildrums/Pilflix">Github</More>
          </Item>
          <Item>
            <ItemTitle>Pilflix</ItemTitle>
            <Description>
              <span>제작기간: 2022.12.13 ~ 2022.12.29</span>
              <span>설명: 노마드코더의 강의를 보고 제작한 프로젝트입니다.</span>
            </Description>
            <More href="https://pildrums.github.io/Pilflix/">바로가기</More>
            <More href="https://github.com/pildrums/Pilflix">Github</More>
          </Item>
        </List>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.orange};
  font-size: 24px;
`;

const List = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.yellow};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.black.darker};
  user-select: none;
`;

const Item = styled.div`
  padding: 15px 30px;
  background: ${(props) => props.theme.white.lighter};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px);
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 10px;
  user-select: none;
`;

const More = styled(Link)`
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.red};
    color: ${(props) => props.theme.red};
  }
`;

const ItemTitle = styled.h2`
  user-select: none;
`;
