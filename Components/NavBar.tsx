import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

interface INavbarProps {}

export default function Navbar() {
  const router = useRouter();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <AnimatePresence>
      <Nav variants={navVars} animate={navAnimation} initial={"top"}>
        <Link href="/">
          <StyledLink
            animate={navAnimation}
            initial={"top"}
            className={router.pathname === "/" ? "active" : ""}
          >
            홈 {router.pathname === "/" && <Circle layoutId="circle" />}
          </StyledLink>
        </Link>
        <Link href="/project">
          <StyledLink
            animate={navAnimation}
            initial={"top"}
            className={router.pathname === "/project" ? "active" : ""}
          >
            프로젝트{" "}
            {router.pathname === "/project" && <Circle layoutId="circle" />}
          </StyledLink>
        </Link>
        <Link href="/career">
          <StyledLink
            animate={navAnimation}
            initial={"top"}
            className={router.pathname === "/career" ? "active" : ""}
          >
            커리어{" "}
            {router.pathname === "/career" && <Circle layoutId="circle" />}
          </StyledLink>
        </Link>
      </Nav>
    </AnimatePresence>
  );
}

const navVars = {
  top: { background: "#fff" },
  scroll: { background: "#ffc300" },
};

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 30px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  .active {
    color: ${props => props.theme.brown.lighter};
    font-weight: 500;
  }
`;

const StyledLink = styled(motion.span)`
  position: relative;
  font-weight: 400;
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background: ${(props) => props.theme.red};
  border-radius: 5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
