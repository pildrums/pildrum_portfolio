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

interface IAboutProps {}

// AboutItem에 들어갈 내용은 array 형태로 만든 후,
// map 메서드 이용예정

export default function About() {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <AboutContent>
        <AboutItem variants={itemVars} initial="initial" whileHover="hover">
          <MdFace />
          <AboutItemContent>
            <span>이름</span>
            <span>김필진</span>
          </AboutItemContent>
        </AboutItem>
        <AboutItem variants={itemVars} initial="initial" whileHover="hover">
          <MdCalendarToday />
          <AboutItemContent>
            <span>생년월일</span>
            <span>92.07.31</span>
          </AboutItemContent>
        </AboutItem>
        <AboutItem variants={itemVars} initial="initial" whileHover="hover">
          <MdLocationOn />
          <AboutItemContent>
            <span>주소지</span>
            <span>경기도 안산시</span>
          </AboutItemContent>
        </AboutItem>
        <AboutItem variants={itemVars} initial="initial" whileHover="hover">
          <MdPhone />
          <AboutItemContent>
            <span>연락처</span>
            <span>010.4721.6470</span>
          </AboutItemContent>
        </AboutItem>
        <AboutItem variants={itemVars} initial="initial" whileHover="hover">
          <MdOutlineEmail />
          <AboutItemContent>
            <span>이메일</span>
            <span>there7788@gmail.com</span>
          </AboutItemContent>
        </AboutItem>
        <AboutItem variants={itemVars} initial="initial" whileHover="hover">
          <MdMenuBook />
          <AboutItemContent>
            <span>학력</span>
            <span>호서대학교 시각디자인학과</span>
          </AboutItemContent>
        </AboutItem>
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
  border-bottom: 1px solid ${(props) => props.theme.black.veryDark};
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
      color: ${(props) => props.theme.yellow};
      user-select: none;
    }
    &:last-child {
      font-size: 18px;
      font-weight: 400;
      color: ${(props) => props.theme.white.lighter};
    }
  }
`;
