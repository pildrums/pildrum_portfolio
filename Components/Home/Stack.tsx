import styled from "styled-components";

interface IStackProps {}

export default function Stack() {
  return (
    <Wrapper>
      <Title>Stack</Title>
      <Content>
        <List>
          <ListTitle>Frontend</ListTitle>
          <Item></Item>
        </List>
        <List>
          <ListTitle>Backend</ListTitle>
          <Item></Item>
        </List>
        <List>
          <ListTitle>Mobile App</ListTitle>
          <Item></Item>
        </List>
        <List>
          <ListTitle>Version Management</ListTitle>
          <Item></Item>
        </List>
        <List>
          <ListTitle>Communication</ListTitle>
          <Item></Item>
        </List>
        <List>
          <ListTitle>Certificate</ListTitle>
          <Item></Item>
        </List>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.orange};
`;

const Title = styled.h1`
  font-size: 40px;
  border-bottom: 4px solid ${(props) => props.theme.black.veryDark};
  color: ${(props) => props.theme.black.darker};
  font-weight: 600;
  height: 56px;
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const List = styled.div`
  padding: 30px 50px;
  background: ${(props) => props.theme.white.lighter};
  border-radius: 10px;
`;

const ListTitle = styled.h2`
  font-weight: 400;
  color: ${(props) => props.theme.brown.lighter};
  border-bottom: 1px solid ${(props) => props.theme.brown.veryLighter};
`;

const Item = styled.div``;
