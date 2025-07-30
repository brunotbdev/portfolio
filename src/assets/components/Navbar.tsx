// import logo from "./images/logo.png";
import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useTransform, cubicBezier } from "motion/react";
import type { MotionValue } from "motion/react";
import LangButton from "./LangButton";
import { useDialecto } from "dialecto";
import { useLenis } from "lenis/react";
// import logopixel from "./images/logopixel.png";

interface NavbarProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollYProgress: MotionValue<number>;
}

export default function Navbar({
  scrollYProgress,
  setIsNavOpen,
  isNavOpen,
}: NavbarProps) {
  const ref = useRef(null);
  const backRef = useRef(null);
  const { d } = useDialecto();
  const lenis = useLenis();

  useEffect(() => {
    function resize() {
      if (!window.matchMedia("(max-width: 500px)").matches) {
        setIsNavOpen(false);
      }
    }

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"], {
    ease: cubicBezier(0.83, 0, 0.17, 1),
  });
  const backY = useTransform(scrollYProgress, [0, 1], ["150%", "0%"], {
    ease: cubicBezier(0.83, 0, 0.17, 1),
  });

  return (
    <>
      <motion.nav
        className="fixed z[1003] flex w[100%] max-w[1920px] p[1.5rem_2rem]"
        style={{ y: navY }}
        ref={ref}
      >
        <a
          href="#"
          className="relative &:hover_[alt='Logo'],&:focus-visible_[alt='Logo'];opacity[0] &:hover_[alt='Logopixel'],&:focus-visible_[alt='Logopixel'];opacity[1]"
        >
          <img
            src="./images/logo.png"
            alt="Logo"
            className="w[35px] opacity[1]"
          />
          <img
            src="./images/logopixel.png"
            alt="Logopixel"
            className="image[pixelated] image[crisp-edges] w[35px] rotate[4deg] opacity[0] absolute top[0] left[0]"
          />
        </a>
        <div className="flex align[center] gap[1.5rem] ml[auto] &_a;clr{clr-text},p[.5rem_1rem],radius[1.5rem]">
          <a
            onClick={() => {
              lenis?.scrollTo("#sobre", { offset: -55 });
            }}
            href="#sobre"
            className="&:hover,&:focus-visible;bg[oklch(from_{clr-text}_l_c_h_/_0.2)] none|mq-max-500px"
          >
            {d("sobre")}
          </a>
          <a
            onClick={() => {
              lenis?.scrollTo("#projects", { offset: -55 });
            }}
            href="#projects"
            className=" &:hover,&:focus-visible;bg[oklch(from_{clr-text}_l_c_h_/_0.2)] none|mq-max-500px"
          >
            {d("projetos")}
          </a>
          <a
            onClick={() => {
              lenis?.scrollTo("#contato", { offset: -55 });
            }}
            href="#contato"
            className="bg{clr-accent} &:hover,&:focus-visible;bg{clr-accent-hover} none|mq-max-500px"
          >
            {d("contato")}
          </a>
          <LangButton />
          {isNavOpen ? (
            <button
              onClick={() => setIsNavOpen(false)}
              className="bg[transparent] cursor[pointer] none|mq-min-501px"
            >
              <ChevronRight color="#efefef" size={28} />
            </button>
          ) : (
            <button
              onClick={() => setIsNavOpen(true)}
              className="bg[transparent] cursor[pointer] none|mq-min-501px"
            >
              <ChevronLeft color="#efefef" size={28} />
            </button>
          )}
        </div>
      </motion.nav>
      <motion.a
        onClick={() => {
          lenis?.scrollTo("#parallax");
        }}
        style={{ y: backY }}
        ref={backRef}
        href="#parallax"
        className="bg{clr-accent} p[.5rem] radius[50%] fixed z[1003] bottom[.7rem] right[.7rem] &:hover,&:focus-visible;bg[oklch(from_{clr-accent}_calc(l*1.1)_c_h)]"
      >
        <ChevronUp color="#efefef" size={24} />
      </motion.a>
      {isNavOpen ? (
        <>
          <div
            onClick={() => setIsNavOpen(false)}
            className="transition[all_0s_ease] z[1001] w[100%] h[100%] fixed top[0] left[0]"
          ></div>
          <a
            onClick={() => {
              setIsNavOpen(false);
              lenis?.scrollTo("#sobre", { offset: -55 });
            }}
            href="#sobre"
            className="transition[right_1s_cubic-bezier(0.83,_0,_0.17,_1),background-color_.2s_ease] fixed right[.5rem] top[6rem] z[1002] clr{clr-text} bg{clr-accent} &:hover,&:focus-visible;bg{clr-accent-hover} p[.5rem_1rem] radius[1.5rem]"
          >
            {d("sobre")}
          </a>
          <a
            onClick={() => {
              setIsNavOpen(false);
              lenis?.scrollTo("#projects", { offset: -55 });
            }}
            href="#projects"
            className="transition[right_1s_0.05s_cubic-bezier(0.83,_0,_0.17,_1),background-color_.2s_ease] fixed right[.5rem] top[9rem] z[1002] clr{clr-text} bg{clr-accent} &:hover,&:focus-visible;bg{clr-accent-hover} p[.5rem_1rem] radius[1.5rem]"
          >
            {d("projetos")}
          </a>
          <a
            onClick={() => {
              setIsNavOpen(false);
              lenis?.scrollTo("#contato", { offset: -55 });
            }}
            href="#contato"
            className="transition[right_1s_0.1s_cubic-bezier(0.83,_0,_0.17,_1),background-color_.2s_ease] fixed right[.5rem] top[12rem] z[1002] clr{clr-text} bg{clr-accent} &:hover,&:focus-visible;bg{clr-accent-hover} p[.5rem_1rem] radius[1.5rem]"
          >
            {d("contato")}
          </a>
        </>
      ) : (
        <>
          <div
            onClick={() => setIsNavOpen(false)}
            className="transition[all_0s_ease] z[1001] w[100%] h[100%] fixed top[0] left[100%]"
          ></div>
          <a
            onClick={() => setIsNavOpen(false)}
            href="#sobre"
            className="transition[right_1s_cubic-bezier(0.83,_0,_0.17,_1),background-color_.2s_ease] fixed right[-7rem] top[6rem] z[1002] clr{clr-text} bg{clr-accent} &:hover,&:focus-visible;bg{clr-accent-hover} p[.5rem_1rem] radius[1.5rem]"
          >
            {d("sobre")}
          </a>
          <a
            onClick={() => setIsNavOpen(false)}
            href="#projects"
            className="transition[right_1s_0.05s_cubic-bezier(0.83,_0,_0.17,_1),background-color_.2s_ease] fixed right[-7rem] top[9rem] z[1002] clr{clr-text} bg{clr-accent} &:hover,&:focus-visible;bg{clr-accent-hover} p[.5rem_1rem] radius[1.5rem]"
          >
            {d("projetos")}
          </a>
          <a
            onClick={() => setIsNavOpen(false)}
            href="#contato"
            className="transition[right_1s_0.1s_cubic-bezier(0.83,_0,_0.17,_1),background-color_.2s_ease] fixed right[-7rem] top[12rem] z[1002] clr{clr-text} bg{clr-accent} &:hover,&:focus-visible;bg{clr-accent-hover} p[.5rem_1rem] radius[1.5rem]"
          >
            {d("contato")}
          </a>
        </>
      )}
    </>
  );
}
