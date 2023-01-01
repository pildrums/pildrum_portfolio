import Layout from "Components/Layout";
import Seo from "Components/Seo";
import styled from "styled-components";

interface IprojectProps {}

export default function project() {
  return (
    <Layout>
      <Seo title="프로젝트" />
      <Wrapper>
        <div>
          <a
            href="https://pildrums.github.io/Pilflix/"
            target="_blank"
            rel="noreferrer"
          >
            Pilflix
          </a>
        </div>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  div {
    width: 400px;
    height: 400px;
    background: #000;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      padding: 10px 20px;
      background: #fff;
      color: #000;
      transition: scale 0.3s ease-in-out;
      &:hover {
        scale: 1.1;
      }
    }
  }
`;
