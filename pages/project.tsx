import Layout from "Components/Layout";
import styled from "styled-components";

interface IprojectProps {}

export default function project() {
  return (
    <Layout>
      <Wrapper>
        <div>프로젝트</div>
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
