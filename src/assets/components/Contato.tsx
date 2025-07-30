// import _github from "./images/stack/github-color.svg";
// import _gmail from "./images/stack/gmail-color.svg";
// import _linkedin from "./images/stack/linkedin-color.svg";
// import chatpixel from "./images/chatpixel.png";

// import _gmailpixel from "./images/stack/gmail-color.png";
// import _githubpixel from "./images/stack/github-color.png";
// import _linkedinpixel from "./images/stack/linkedin-color.png";

import Line from "./Line";
import Title from "./Title";

import { useRef } from "react";
import { useDialecto } from "dialecto";

const s_pd = "&:hover,&:focus-visible;rotate[1deg],scale[1.02]";
const s_nd = "&:hover,&:focus-visible;rotate[-1deg],scale[1.02]";

function random() {
  const value = Math.floor(Math.random() * 2);

  if (value === 0) return s_pd;
  if (value === 1) return s_nd;
}

export default function Contato() {
  const ref = useRef(null);
  const { d } = useDialecto();

  return (
    <div ref={ref}>
      <Line>
        <Title id="contato" title={String(d("contato"))} containerRef={ref} />
      </Line>
      <div className="center gap[5rem]|mq-max-1000px-750px gap[10rem]|mq-min-1000px-1700px gap[15rem]|mq-min-1700px py[9rem]|mq-max-500px py[12.5rem]|mq-min-500px">
        <div>
          <img
            src="./images/chatpixel.png"
            alt="Chat"
            draggable={false}
            className="image[pixelated] image[crisp-edges] none|mq-max-750px select[none] min-w[300px]|mq-max-1700px min-w[350px]|mq-min-1700px animation[neon_20s_linear_infinite]"
          />
        </div>
        <div className="&_a:hover;bg{clr-mudar-2} &_a:hover_div:has(img,svg);bg[oklch(from_{clr-mudar-2}_calc(l*1.1)_c_h)] grid grid-template-columns[repeat(1,_1fr)] gap[3.5rem]|mq-max-500px gap[2rem]|mq-min-500px">
          <div className={`${random()}`}>
            <a
              draggable={false}
              href="mailto:brunotbacarin11@gmail.com"
              className="&:hover_:first-child_:first-child,&:focus-visible_:first-child_:first-child;opacity[0] &:hover_:first-child_:last-child,&:focus-visible_:first-child_:last-child;opacity[1] shadow[0_0_8px_8px_#11111130] flex align[center] gap[1rem] bg{clr-secondary-dark} radius[.5rem] p[.8rem]"
            >
              <div className="relative bg{clr-mudar} p[.5rem] radius[.5rem]">
                <img
                  className="min-w[20px] w[40px] opacity[1]"
                  src="./images/stack/gmail-color.svg"
                  alt=""
                />
                <img
                  className="min-w[20px] w[40px] image[pixelated] image[crisp-edges] opacity[0] absolute top[50%] left[50%] transform[translate(-50%,_-50%)]"
                  src="./images/stack/gmail-color.png"
                  alt=""
                />
              </div>
              <div className="flex[column]">
                <h3 className="fs[md] fw[bold] clr{clr-accent}">Gmail</h3>
                <p className="clr{clr-text}">brunotbacarin11@gmail.com</p>
              </div>
            </a>
          </div>
          <div className={`${random()}`}>
            <a
              draggable={false}
              href="https://github.com/brunotbdev"
              className="&:hover_:first-child_:first-child,&:focus-visible_:first-child_:first-child;opacity[0] &:hover_:first-child_:last-child,&:focus-visible_:first-child_:last-child;opacity[1] shadow[0_0_8px_8px_#11111130] flex align[center] gap[1rem] bg{clr-secondary-dark} radius[.5rem] p[.8rem]"
            >
              <div className="relative bg{clr-mudar} p[.5rem] radius[.5rem]">
                <img
                  className="min-w[20px] w[40px] opacity[1]"
                  src="./images/stack/github-color.svg"
                  alt=""
                />
                <img
                  className="min-w[20px] w[40px] image[pixelated] image[crisp-edges] opacity[0] absolute top[50%] left[50%] transform[translate(-50%,_-50%)]"
                  src="./images/stack/github-color.png"
                  alt=""
                />
              </div>
              <div className="flex[column]">
                <h3 className="fs[md] fw[bold] clr{clr-accent}">Github</h3>
                <p className="clr{clr-text}">brunotbdev</p>
              </div>
            </a>
          </div>
          <div className={`${random()}`}>
            <a
              draggable={false}
              href="https://www.linkedin.com/in/brunotb/"
              className="&:hover_:first-child_:first-child,&:focus-visible_:first-child_:first-child;opacity[0] &:hover_:first-child_:last-child,&:focus-visible_:first-child_:last-child;opacity[1] shadow[0_0_8px_8px_#11111130] flex align[center] gap[1rem] bg{clr-secondary-dark} radius[.5rem] p[.8rem]"
            >
              <div className="relative bg{clr-mudar} p[.5rem] radius[.5rem]">
                <img
                  className="min-w[20px] w[40px] opacity[1]"
                  src="./images/stack/linkedin-color.svg"
                  alt=""
                />
                <img
                  className="min-w[20px] w[40px] image[pixelated] image[crisp-edges] opacity[0] absolute top[50%] left[50%] transform[translate(-50%,_-50%)]"
                  src="./images/stack/linkedin-color.png"
                  alt=""
                />
              </div>
              <div className="flex[column]">
                <h3 className="fs[md] fw[bold] clr{clr-accent}">Linkedin</h3>
                <p className="clr{clr-text}">Bruno Tavares Bacarin</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
