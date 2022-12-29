import { PropsWithChildren } from "react";
import Navbar from "./NavBar";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <motion.div
        variants={layoutVars}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </>
  );
}

const layoutVars = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 300, opacity: 0 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
};
