import Link from "next/link";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface IArchiveProps {}

export default function Archive() {
  return (
    <Wrapper>
      <Title>Archive</Title>
      <Content>
        <Item>
          <FaGithub />
          <div>
            <span>GitHub</span>
            <Link href="https://github.com/pildrums">바로가기</Link>
          </div>
        </Item>
        <Item>
          <Image src="/assets/images/velog.jpg" alt="" width={30} height={30} />
          <div>
            <span>Velog</span>
            <Link href="https://velog.io/@pj9211">바로가기</Link>
          </div>
        </Item>
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
  background: ${(props) => props.theme.yellow};
`;

const Title = styled.h1`
  font-size: 40px;
  border-bottom: 1px solid ${(props) => props.theme.black.veryDark};
  color: ${(props) => props.theme.black.darker};
  font-weight: 600;
  height: 56px;
`;

const Content = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Item = styled.div`
  background: ${(props) => props.theme.white.lighter};
  color: ${(props) => props.theme.black.darker};
  padding: 30px 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      font-weight: 600;
      font-size: 28px;
      user-select: none;
    }
  }
  svg {
    font-size: 60px;
  }
  a {
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.orange};
    }
  }
`;
