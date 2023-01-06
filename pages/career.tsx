import Layout from "Components/Layout";
import Seo from "Components/Seo";
import styled from "styled-components";

interface ICareerProps {}

export default function Career() {
  return (
    <Layout>
      <Seo title="커리어" />
      <Wrapper>
        <Title>Career</Title>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.black.lighter};
  padding-bottom: 120px;
`;

const Title = styled.h1`
  font-size: 40px;
  border-bottom: 4px solid ${(props) => props.theme.white.lighter};
  color: ${(props) => props.theme.white.lighter};
  font-weight: 600;
  height: 56px;
  margin-top: 120px;
`;
