import Link from "next/link";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";

interface IFooterProps {}

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <Title>Contacts</Title>
        <div>
          <MdOutlineEmail />
          <Link href="mailto:there7788@gmail.com">메일 보내기</Link>
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.black.veryDark};
  padding: 48px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    svg {
      font-size: 48px;
    }
  }
`;

const Title = styled.h1`
  font-size: 40px;
  border-bottom: 1px solid ${(props) => props.theme.white.darker};
  color: ${(props) => props.theme.white.darker};
  font-weight: 600;
  margin-bottom: 40px;
`;
