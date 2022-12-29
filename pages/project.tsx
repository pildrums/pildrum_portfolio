import Layout from "Components/Layout";
import styled from "styled-components";

interface IprojectProps {}

export default function project() {
  return (
    <Layout>
      <Wrapper>프로젝트</Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
