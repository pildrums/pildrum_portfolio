import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
} from "react-icons/si";

const STACK = [
  {
    id: 1,
    title: "HTML5",
    green: true,
    yellow: false,
    red: false,
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    title: "CSS3",
    green: true,
    yellow: false,
    red: false,
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    title: "JavaScript",
    green: false,
    yellow: true,
    red: false,
    icon: <SiJavascript />,
  },
  {
    id: 4,
    title: "TypeScript",
    green: false,
    yellow: true,
    red: false,
    icon: <SiTypescript />,
  },
  {
    id: 5,
    title: "React.js",
    green: true,
    yellow: false,
    red: false,
    icon: <SiReact />,
  },
  {
    id: 6,
    title: "Next.js",
    green: false,
    yellow: true,
    red: false,
    icon: <SiNextdotjs />,
  },
  {
    id: 7,
    title: "Styled-Components",
    green: true,
    yellow: false,
    red: false,
    icon: <SiStyledcomponents />,
  },
  {
    id: 8,
    title: "SASS/SCSS",
    green: true,
    yellow: false,
    red: false,
    icon: <FaSass />,
  },
];

export default function Frontend() {
  return (
    <List variants={listVars} initial="initial" whileHover="hover">
      <ListTitle>Frontend</ListTitle>
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
