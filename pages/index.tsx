import About from "Components/Home/About";
import Intro from "Components/Home/Intro";
import Layout from "Components/Layout";
import Seo from "Components/Seo";
import styled from "styled-components";

interface IHomeProps {}

export default function Home() {
  return (
    <Layout>
      <Seo title="홈" />
      <Wrapper>
        <Space />
        <Intro />
        <Space />
        <About />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 24px;
`;

const Space = styled.div`
  margin-top: 80px;
`;
