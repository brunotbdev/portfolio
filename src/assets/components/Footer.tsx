// import logo from "./images/logo.png";
import { useDialecto } from "dialecto";
import { useLenis } from "lenis/react";
// import coisinha from "./images/coisinha.png";

export default function Footer() {
  const { d } = useDialecto();
  const lenis = useLenis();

  return (
    <footer>
      <div className="flex pt[3rem]">
        <div className="w[50%]">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="w[35px]|mq-max-500px w[50px]|mq-min-500px ml[3rem] ml[2rem]|mq-max-500px"
          />
        </div>
        <div className="&_a:hover_img;opacity[1] &_a:hover;clr{clr-accent},translate[1rem] flex justify[space-around] w[50%] pr[1rem] &_a;clr{clr-text} &_a;fs[sm]|mq-max-500px &_h3;clr{clr-accent},fw[bold] &_h3;fs[lg]|mq-min-500px">
          <div className="flex[column] gap[1rem]">
            <h3>Links</h3>
            <div className="flex[column] gap[.7rem]">
              <a
                onClick={() => {
                  lenis?.scrollTo("#parallax");
                }}
                href="#parallax"
                className="relative"
              >
                <img
                  src="./images/coisinha.png"
                  alt=""
                  className="absolute w[10px] bottom[5px] left[-1rem] opacity[0]"
                />
                {d("inicio")}
              </a>
              <a
                onClick={() => {
                  lenis?.scrollTo("#sobre", { offset: -55 });
                }}
                href="#sobre"
                className="relative"
              >
                <img
                  src="./images/coisinha.png"
                  alt=""
                  className="absolute w[10px] bottom[5px] left[-1rem] opacity[0]"
                />
                {d("sobre")}
              </a>
              <a
                onClick={() => {
                  lenis?.scrollTo("#projects", { offset: -55 });
                }}
                href="#projects"
                className="relative"
              >
                <img
                  src="./images/coisinha.png"
                  alt=""
                  className="absolute w[10px] bottom[5px] left[-1rem] opacity[0]"
                />
                {d("projetos")}
              </a>
              <a
                onClick={() => {
                  lenis?.scrollTo("#contato", { offset: -55 });
                }}
                href="#contato"
                className="relative"
              >
                <img
                  src="./images/coisinha.png"
                  alt=""
                  className="absolute w[10px] bottom[5px] left[-1rem] opacity[0]"
                />
                {d("contato")}
              </a>
            </div>
          </div>
          <div className="flex[column] gap[1rem]">
            <h3>{d("contato")}</h3>
            <div className="flex[column] gap[.7rem]">
              <a href="mailto:brunotbacarin11@gmail.com" className="relative">
                <img
                  src="./images/coisinha.png"
                  alt=""
                  className="absolute w[10px] bottom[5px] left[-1rem] opacity[0]"
                />
                Gmail
              </a>
              <a
                href="https://www.linkedin.com/in/brunotb/"
                className="relative"
              >
                <img
                  src="./images/coisinha.png"
                  alt=""
                  className="absolute w[10px] bottom[5px] left[-1rem] opacity[0]"
                />
                Linkedin
              </a>
              <a href="https://github.com/brunotbdev" className="relative">
                <img
                  src="./images/coisinha.png"
                  alt=""
                  className="absolute w[10px] bottom[5px] left[-1rem] opacity[0]"
                />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="center clr{clr-text} py[3rem]">
        <span className="grow[1] mx[1rem] h[5px] background[linear-gradient(60deg,_transparent_0%,_var(--clr-accent)_35%,_var(--clr-accent)_50%,_var(--clr-accent)_65%,_transparent_100%)]" />
        <p className="fs[sm]|mq-max-500px">© 2025 Bruno Tavares Bacarin</p>
        <span className="grow[1] mx[1rem] h[5px] background[linear-gradient(60deg,_transparent_0%,_var(--clr-accent)_35%,_var(--clr-accent)_50%,_var(--clr-accent)_65%,_transparent_100%)]" />
      </div>
    </footer>
  );
}
