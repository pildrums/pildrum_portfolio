import Layout from "Components/Layout";
import ProjectDetail from "Components/Project/ProjectDetail";
import ProjectList from "Components/Project/ProjectList";
import Seo from "Components/Seo";
import Link from "next/link";
import styled from "styled-components";

interface IprojectProps {}

export default function project() {
  const 
  const onClose = () => {};
  return (
    <Layout>
      <Seo title="프로젝트" />
      <Wrapper>
        <ProjectList />
      </Wrapper>
      <ProjectDetail />
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.orange};
  font-size: 24px;
`;
