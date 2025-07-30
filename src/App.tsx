import Navbar from "./assets/components/Navbar";
import Parallax from "./assets/components/Parallax";
import Sobre from "./assets/components/Sobre";
import Projects from "./assets/components/Projects";
import Contato from "./assets/components/Contato";
import Footer from "./assets/components/Footer";

import React, { useRef, useState } from "react";
import { useScroll } from "motion/react";

import Click from "./assets/components/animations/Click";

import ReactLenis from "lenis/react";

export default function App() {
  const containerRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  history.scrollRestoration = "manual";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["15px start", "16px start"],
  });

  interface Click {
    x: number;
    y: number;
  }
  const [click, setClick] = useState<Click | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  function handleClick(e: React.MouseEvent) {
    const { pageX, pageY } = e;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setClick({ x: pageX, y: pageY });

    timeoutRef.current = setTimeout(() => {
      setClick(null);
    }, 500);
  }

  return (
    <>
      <ReactLenis root options={{ duration: 2 }} />
      <div
        onClick={handleClick}
        className="relative container"
        ref={containerRef}
      >
        {click && <Click key={crypto.randomUUID()} x={click.x} y={click.y} />}
        <Navbar
          scrollYProgress={scrollYProgress}
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
        />
        <Parallax />
        <div className="relative z[15] flex[column] grow[1] bg{clr-primary}">
          <Sobre />
          <div className="bg{clr-secondary} stars px[8rem] px[5rem]|mq-max-1500px px[2.5rem]|mq-max-800px px[1.5rem]|mq-max-500px">
            <Projects />
            <Contato />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
