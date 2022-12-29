import Layout from "Components/Layout";
import styled from "styled-components";

interface IHomeProps {}

export default function Home() {
  return (
    <Layout>
      <Wrapper>홈</Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
