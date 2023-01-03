import styled from "styled-components";

interface IProjectItemProps {
  title: string;
}

export default function ProjectItem({ title }: IProjectItemProps) {
  return (
    <Wrapper>
      <DummyImage />
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const DummyImage = styled.div`
  width: 200px;
  height: 100px;
  background: coral;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  padding: 8px 0;
`;
