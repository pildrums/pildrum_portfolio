import styled from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaGithub,
  FaGit,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiPython,
  SiDjango,
  SiMariadb,
  SiMysql,
  SiAdobexd,
  SiHeroku,
  SiFirebase,
  SiJekyll,
  SiMongodb,
  SiFlutter,
} from "react-icons/si";
import { motion } from "framer-motion";

interface IStackProps {}

export default function Stack() {
  return (
    <Wrapper>
      <Title>Stack</Title>
      <Status>
        <StatusList>
          <span>사용 가능</span>
          <div></div>
        </StatusList>
        |
        <StatusList>
          <span>현재 학습 중</span>
          <div></div>
        </StatusList>
      </Status>
      <Content>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Frontend</ListTitle>
          <Item>
            <FaHtml5 />
            <span>HTML5</span>
          </Item>
          <Item>
            <FaCss3Alt />
            <span>CSS3</span>
          </Item>
          <Item>
            <SiJavascript />
            <span>JavaScript</span>
          </Item>
          <Item>
            <SiTypescript />
            <span>TypeScript</span>
          </Item>
          <Item>
            <SiReact />
            <span>React.js</span>
          </Item>
          <Item>
            <SiNextdotjs />
            <span>Next.js</span>
          </Item>
          <Item>
            <SiStyledcomponents />
            <span>Styled-Components</span>
          </Item>
          <Item>
            <FaSass />
            <span>SASS/SCSS</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Backend</ListTitle>
          <Item>
            <FaNodeJs />
            <span>Node.JS</span>
          </Item>
          <Item>
            <SiPython />
            <span>Python</span>
          </Item>
          <Item>
            <SiDjango />
            <span>Django</span>
          </Item>
          <Item>
            <SiMysql />
            <span>MySQL</span>
          </Item>
          <Item>
            <SiMariadb />
            <span>MariaDB</span>
          </Item>
          <Item>
            <SiMongodb />
            <span>MongoDB</span>
          </Item>
          <Item>
            <SiFirebase />
            <span>Firebase</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Mobile App</ListTitle>
          <Item>
            <SiReact />
            <span>React Native</span>
          </Item>
          <Item>
            <SiFlutter />
            <span>Flutter</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Version Management</ListTitle>
          <Item>
            <FaGithub />
            <span>GitHub</span>
          </Item>
          <Item>
            <FaGit />
            <span>Git</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Communication</ListTitle>
          <Item>
            <FaFigma />
            <span>Figma</span>
          </Item>
          <Item>
            <SiAdobexd />
            <span>Adobe XD / Zeplin</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Deployment</ListTitle>
          <Item>
            <SiHeroku />
            <span>Heroku</span>
          </Item>
          <Item>
            <SiJekyll />
            <span>Jekyll</span>
          </Item>
        </List>
      </Content>
    </Wrapper>
  );
}

const listVars = {
  initial: {
    y: 0,
  },
  hover: {
    y: -15,
    boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.3)",
    transition: {
      damping: 0,
      stiffness: 10,
      bounce: 0.5,
    },
  },
};

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

const Status = styled.div`
  margin-bottom: 20px;
  color: ${(props) => props.theme.black.lighter};
  display: flex;
  gap: 20px;
`;

const StatusList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  div {
    width: 20px;
    height: 20px;
    background: #000;
    border-radius: 50%;
  }
  span {
    &:first-child {
      font-weight: 400;
    }
  }
  &:first-child {
    div {
      background: ${(props) => props.theme.green};
    }
  }
  &:last-child {
    div {
      background: ${(props) => props.theme.red};
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const List = styled(motion.div)`
  padding: 30px 50px;
  background: ${(props) => props.theme.white.lighter};
  border-radius: 10px;
`;

const ListTitle = styled.h2`
  font-weight: 400;
  color: ${(props) => props.theme.brown.lighter};
  border-bottom: 1px solid ${(props) => props.theme.brown.veryLighter};
  user-select: none;
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.black.veryDark};
  margin: 20px 0;
  svg {
    font-size: 60px;
  }
  span {
    font-size: 20px;
    font-weight: 500;
    user-select: none;
  }
`;
