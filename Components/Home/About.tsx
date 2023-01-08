import styled from "styled-components";
import {
  MdFace,
  MdCalendarToday,
  MdLocationOn,
  MdPhone,
  MdOutlineEmail,
  MdMenuBook,
} from "react-icons/md";
import { motion } from "framer-motion";

const ABOUT = [
  {
    id: 1,
    icon: <MdFace />,
    title: "이름",
    content: "김필진",
  },
  {
    id: 2,
    icon: <MdCalendarToday />,
    title: "생년월일",
    content: "92.07.31",
  },
  {
    id: 3,
    icon: <MdLocationOn />,
    title: "주소지",
    content: "경기도 안산시",
  },
  {
    id: 4,
    icon: <MdPhone />,
    title: "연락처",
    content: "010.4721.6470",
  },
  {
    id: 5,
    icon: <MdOutlineEmail />,
    title: "이메일",
    content: "there7788@gmail.com",
  },
  {
    id: 6,
    icon: <MdMenuBook />,
    title: "학력",
    content: "신성대학교 시각디자인과",
  },
];

export default function About() {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <AboutContent>
        {ABOUT.map((item) => (
          <AboutItem
            variants={itemVars}
            initial="initial"
            whileHover="hover"
            key={item.id}
          >
            {item.icon}
            <AboutItemContent>
              <span>{item.title}</span>
              <span>{item.content}</span>
            </AboutItemContent>
          </AboutItem>
        ))}
      </AboutContent>
    </Wrapper>
  );
}

const itemVars = {
  initial: {
    y: 0,
  },
  hover: {
    y: -15,
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
`;

const Title = styled.h1`
  font-size: 40px;
  border-bottom: 4px solid ${(props) => props.theme.black.veryDark};
  color: ${(props) => props.theme.black.darker};
  font-weight: 600;
  height: 56px;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin: 40px 0;
`;

const AboutItem = styled(motion.div)`
  color: ${(props) => props.theme.black.lighter};
  padding: 30px 50px;
  border-radius: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${(props) => props.theme.black.darker};
  svg {
    font-size: 56px;
    color: ${(props) => props.theme.white.darker};
  }
`;

const AboutItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    &:first-child {
      font-size: 16px;
      font-weight: 800;
      color: ${(props) => props.theme.yellow.lighter};
      user-select: none;
    }
    &:last-child {
      font-size: 16px;
      font-weight: 400;
      color: ${(props) => props.theme.white.lighter};
    }
  }
`;
