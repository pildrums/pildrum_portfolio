import styled, { css } from "styled-components";
import { SiReact } from "react-icons/si";
import { motion } from "framer-motion";

interface IBackendProps {}

const STACK = [
  {
    id: 1,
    title: "React Native",
    green: false,
    yellow: true,
    red: false,
    icon: <SiReact />,
  },
];

export default function MobileApp() {
  return (
    <List variants={listVars} initial="initial" whileHover="hover">
      <ListTitle>Mobile App</ListTitle>
      {STACK.map((item) => (
        <Item key={item.id}>
          <Circle green={item.green} yellow={item.yellow} red={item.red} />
          {item.icon}
          <span>{item.title}</span>
        </Item>
      ))}
    </List>
  );
}

const listVars = {
  initial: {
    y: 0,
  },
  hover: {
    y: -15,
    boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.5)",
    transition: {
      damping: 0,
      stiffness: 10,
      bounce: 0.5,
    },
  },
};

const List = styled(motion.div)`
  padding: 30px 50px;
  background: ${(props) => props.theme.black.lighter};
  border-radius: 10px;
`;

const ListTitle = styled.h2`
  font-weight: 400;
  color: ${(props) => props.theme.yellow.lighter};
  border-bottom: 1px solid ${(props) => props.theme.yellow.darker};
  user-select: none;
  line-height: 50px;
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.white.lighter};
  margin: 20px 0;
  svg {
    font-size: 60px;
  }
  span {
    font-size: 20px;
    font-weight: 500;
    user-select: none;
    color: ${(props) => props.theme.white.darker};
  }
`;

const Circle = styled.div<{ green?: boolean; yellow?: boolean; red?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  ${(props) =>
    props.green &&
    css`
      background: ${props.theme.green.lighter};
    `}
  ${(props) =>
    props.yellow &&
    css`
      background: ${props.theme.yellow.lighter};
    `}
  ${(props) =>
    props.red &&
    css`
      background: ${props.theme.red};
    `}
`;
