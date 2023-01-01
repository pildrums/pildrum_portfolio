import Layout from "Components/Layout";
import Seo from "Components/Seo";
import styled from "styled-components";

interface IcareerProps {}

export default function career() {
  return (
    <Layout>
      <Seo title="커리어" />
      <Wrapper>{/* Content */}</Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div``;
