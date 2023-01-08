import styled from "styled-components";
import Layout from "Components/Layout";

interface I404Props {}

export default function Error() {
  return (
    <Layout>
      <Wrapper>
        <StyledImage img="assets/logo.png" />
        <span>페이지를 찾을 수 없습니다.</span>
        <span>404 Not Found</span>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  gap: 20px;
  background: ${props => props.theme.yellow.darker};
  span {
    font-size: 32px;
    &:nth-child(2) {
      font-weight: 400;
    }
    &:nth-child(3) {
      color: #fff;
    }
  }
`;

const StyledImage = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  width: 100px;
  height: 100px;
  background-size: cover;
`;
