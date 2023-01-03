import styled from "styled-components";
import ProjectItem from "./ProjectItem";

interface IProjectListProps {}

const info = [
  {
    id: 1,
    title: "McDonald",
  },
  {
    id: 2,
    title: "Pilflix",
  },
  {
    id: 3,
    title: "Dummy1",
  },
  {
    id: 4,
    title: "Dummy2",
  },
];

export default function ProjectList({}: IProjectListProps) {
  return (
    <Wrapper>
      <Title>프로젝트</Title>
      <List>
        {info.map((item) => (
          <ProjectItem key={item.id} title={item.title} />
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${(props) => props.theme.white.lighter};
  margin-top: 160px;
  border-radius: 10px;
  padding: 30px 50px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.black.darker};
  margin-bottom: 40px;
  user-select: none;
  text-align: center;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 20px;
`;
