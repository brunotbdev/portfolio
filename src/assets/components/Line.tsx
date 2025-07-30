import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const spanVariants: Variants = {
  offscreen: {
    scaleX: 0,
  },
  onscreen: {
    scaleX: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface LineProps {
  children: ReactNode;
}

export default function Line({ children }: LineProps) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: "all",
    once: true,
  });

  const s_span = `grow[1] translate[0_.5rem] mx[1rem] h[5px] background[linear-gradient(60deg,_transparent_0%,_var(--clr-accent)_35%,_var(--clr-accent)_50%,_var(--clr-accent)_65%,_transparent_100%)]`;
  const s_title = `py[10rem_0]|mq-min-500px center`;

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      animate={inView ? "onscreen" : "offscreen"}
      className={`${s_title}`}
    >
      <motion.span
        className={`${s_span}`}
        variants={spanVariants}
      ></motion.span>
      {children}
      <motion.span
        className={`${s_span}`}
        variants={spanVariants}
      ></motion.span>
    </motion.div>
  );
}
