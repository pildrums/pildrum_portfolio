import styled, { css } from "styled-components";
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
          <span>80 ~ 100%(학습 완료)</span>
          <Circle green />
        </StatusList>
        |
        <StatusList>
          <span>40 ~ 80%(학습 중)</span>
          <Circle yellow />
        </StatusList>
        |
        <StatusList>
          <span>0 ~ 40%(학습 시작)</span>
          <Circle red />
        </StatusList>
      </Status>
      <Content>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Frontend</ListTitle>
          <Item>
            <Circle green />
            <FaHtml5 />
            <span>HTML5</span>
          </Item>
          <Item>
            <Circle green />
            <FaCss3Alt />
            <span>CSS3</span>
          </Item>
          <Item>
            <Circle yellow />
            <SiJavascript />
            <span>JavaScript</span>
          </Item>
          <Item>
            <Circle yellow />
            <SiTypescript />
            <span>TypeScript</span>
          </Item>
          <Item>
            <Circle green />
            <SiReact />
            <span>React.js</span>
          </Item>
          <Item>
            <Circle yellow />
            <SiNextdotjs />
            <span>Next.js</span>
          </Item>
          <Item>
            <Circle green />
            <SiStyledcomponents />
            <span>Styled-Components</span>
          </Item>
          <Item>
            <Circle green />
            <FaSass />
            <span>SASS/SCSS</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Backend</ListTitle>
          <Item>
            <Circle red />
            <FaNodeJs />
            <span>Node.JS</span>
          </Item>
          <Item>
            <Circle red />
            <SiPython />
            <span>Python</span>
          </Item>
          <Item>
            <Circle red />
            <SiDjango />
            <span>Django</span>
          </Item>
          <Item>
            <Circle red />
            <SiMysql />
            <span>MySQL</span>
          </Item>
          <Item>
            <Circle red />
            <SiMariadb />
            <span>MariaDB</span>
          </Item>
          <Item>
            <Circle red />
            <SiMongodb />
            <span>MongoDB</span>
          </Item>
          <Item>
            <Circle yellow />
            <SiFirebase />
            <span>Firebase</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Mobile App</ListTitle>
          <Item>
            <Circle yellow />
            <SiReact />
            <span>React Native</span>
          </Item>
          <Item>
            <Circle red />
            <SiFlutter />
            <span>Flutter</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Version Management</ListTitle>
          <Item>
            <Circle green />
            <FaGithub />
            <span>GitHub</span>
          </Item>
          <Item>
            <Circle green />
            <FaGit />
            <span>Git</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Communication</ListTitle>
          <Item>
            <Circle green />
            <FaFigma />
            <span>Figma</span>
          </Item>
          <Item>
            <Circle green />
            <SiAdobexd />
            <span>Adobe XD / Zeplin</span>
          </Item>
        </List>
        <List variants={listVars} initial="initial" whileHover="hover">
          <ListTitle>Deployment</ListTitle>
          <Item>
            <Circle red />
            <SiHeroku />
            <span>Heroku</span>
          </Item>
          <Item>
            <Circle yellow />
            <SiJekyll />
            <span>Jekyll / Github Pages</span>
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
    boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.5)",
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
  background: ${(props) => props.theme.yellow.darker};
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
  margin-bottom: 40px;
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
    border-radius: 50%;
  }
  span {
    &:first-child {
      font-weight: 400;
      font-size: 18px;
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
    color: ${props => props.theme.white.darker};
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
