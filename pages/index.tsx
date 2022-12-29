import Layout from "Components/Layout";
import styled from "styled-components";

interface IHomeProps {}

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <div>홈</div>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 24px;
  div {
    width: 400px;
    height: 400px;
    background: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
