import styled from "styled-components";

interface IProjectDetailProps {}

export default function ProjectDetail() {
  return (
    <>
      <Overlay />
      <Wrapper>dddd</Wrapper>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  width: 760px;
  height: 760px;
  background: ${(props) => props.theme.white.lighter};
  padding: 20px;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 20px;
`;
