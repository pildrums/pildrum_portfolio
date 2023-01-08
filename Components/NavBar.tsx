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
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

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
      <Wrapper variants={headerVars} animate={navAnimation} initial={"top"}>
        <Nav>
          <Logo href="/">Pildrum`s Portfolio</Logo>
          <LinkContainer>
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
          </LinkContainer>
          <IconList>
            <IconLink href="https://github.com/pildrums">
              <FaGithub />
            </IconLink>
            <IconLink href="mailto:there7788@gmail.com">
              <MdOutlineEmail />
            </IconLink>
            <IconLink href="https://velog.io/@pj9211">
              <span>Velog</span>
            </IconLink>
          </IconList>
        </Nav>
      </Wrapper>
    </AnimatePresence>
  );
}

const headerVars = {
  top: { background: "#fff" },
  scroll: { background: "#ffc300" },
};

const Wrapper = styled(motion.header)`
  width: 100%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 30px 0;
  width: 1320px;
  .active {
    color: ${(props) => props.theme.black.veryDark};
    font-weight: 400;
  }
`;

const Logo = styled(Link)`
  font-weight: 600;
  font-size: 24px;
`;

const LinkContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  svg {
    transition: opacity 0.3s ease-in-out;
    font-size: 30px;
    color: ${(props) => props.theme.black.darker};
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
  span {
    transition: opacity 0.3s ease-in-out;
    font-weight: 600;
    font-size: 20px;
    color: ${(props) => props.theme.black.darker};
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
`;

const IconLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(motion.span)`
  position: relative;
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
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
