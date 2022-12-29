import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

interface INavbarProps {}

export default function Navbar() {
  const router = useRouter();
  return (
    <Wrapper>
      <Link href="/">
        <span className={router.pathname === "/" ? "active" : ""}>홈</span>
      </Link>
      <Link href="/project">
        <span className={router.pathname === "/project" ? "active" : ""}>
          프로젝트
        </span>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background: green;
  padding: 30px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  .active {
    color: coral;
    font-weight: 400;
  }
`;
