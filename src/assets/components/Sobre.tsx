// import _html from "./images/stack/html5-color.svg";
// import _css from "./images/stack/css-color.svg";
// import _js from "./images/stack/javascript-color.svg";
// import _react from "./images/stack/react-color.svg";
// import _typescript from "./images/stack/typescript-color.svg";
// import _git from "./images/stack/git-color.svg";
// import _github from "./images/stack/github-color.svg";
// import _node from "./images/stack/nodedotjs-color.svg";
// import _express from "./images/stack/express-color.svg";
// import _postgresql from "./images/stack/postgresql-color.svg";
// import _docker from "./images/stack/docker-color.svg";

// import _htmlpixel from "./images/stack/html5-color.png";
// import _csspixel from "./images/stack/css-color.png";
// import _jspixel from "./images/stack/javascript-color.png";
// import _reactpixel from "./images/stack/react-color.png";
// import _typescriptpixel from "./images/stack/typescript-color.png";
// import _gitpixel from "./images/stack/git-color.png";
// import _githubpixel from "./images/stack/github-color.png";
// import _nodepixel from "./images/stack/node-color.png";
// import _expresspixel from "./images/stack/express-color.png";
// import _postgresqlpixel from "./images/stack/postgresql-color.png";
// import _dockerpixel from "./images/stack/docker-color.png";

// import logopixel from "./images/logoborder_pixel.png";
// import transition from "./images/transition.png";

import Title from "./Title";
import LangPixel from "./LangPixel";
import TextType from "./animations/TextType";

import { useRef } from "react";
import { useInView } from "motion/react";
import { useDialecto } from "dialecto";

const s_lang1 =
  "lang1 transform-origin[left] bg{clr-secondary-dark} p[1rem] radius[1rem] grow[1] &_>_div;flex,flex-wrap,pt[1rem],gap[1rem]";

export default function Sobre() {
  const ref = useRef(null);
  const refers = useRef(null);
  const isInView = useInView(refers, {
    once: true,
    margin: "-80% 0px -20% 0px",
  });
  const { d, currentLanguage } = useDialecto();

  return (
    <>
      <div
        ref={ref}
        className="sobre pb[10rem] px[8rem] px[5rem]|mq-max-1500px px[2.5rem]|mq-max-800px px[1.5rem]|mq-max-500px"
      >
        <div className="flex gap[5rem] justify[space-between] align[center] py[7rem_5rem] py[5rem]|mq-max-500px">
          <div className="flex[column] gap[.7rem] justify[center]">
            <Title
              id="sobre"
              title={String(d("sobremim"))}
              containerRef={ref}
            />
            {currentLanguage() === "enus" && (
              <TextType
                text={String(d("sobretext"))}
                typingSpeed={40}
                pauseDuration={1000}
                showCursor={true}
                cursorCharacter="_"
                startOnVisible={true}
                className="min-h[150px] clr{clr-text} fs[xlg],lh[xlg]|mq-max-500px fs[1x1],lh[1x1]|mq-min-500px-1700px fs[3x1],lh[3x1]|mq-min-1700px"
              />
            )}
            {currentLanguage() === "ptbr" && (
              <TextType
                text={String(d("sobretext"))}
                typingSpeed={40}
                pauseDuration={1000}
                showCursor={true}
                cursorCharacter="_"
                startOnVisible={true}
                className="min-h[150px] clr{clr-text} fs[xlg],lh[xlg]|mq-max-500px fs[1x1],lh[1x1]|mq-min-500px-1700px fs[3x1],lh[3x1]|mq-min-1700px"
              />
            )}
          </div>
          <img
            src="./images/logoborder_pixel.png"
            alt="Logo"
            draggable={false}
            className="image[pixelated] image[crisp-edges] none|mq-max-700px select[none] w[100%] min-w[200px] max-w[250px] animation[neon_20s_linear_infinite]"
          />
        </div>

        <div ref={refers} className="flex flex[column]|mq-max-1100px gap[1rem]">
          <div className="grow[1] flex[column] gap[1rem]">
            <div className={`${s_lang1} ${isInView && "langopen"}`}>
              <h2 className="lang1-title fs[lg]|mq-max-1700px fs[xlg]|mq-min-1700px fw[bold] clr{clr-text}">
                Frontend
              </h2>
              <div>
                <LangPixel
                  alt="html icon"
                  img="./images/stack/html5-color.svg"
                  imgpixel="./images/stack/html5-color.png"
                  className="lang1-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon1"
                />
                <LangPixel
                  alt="css icon"
                  img="./images/stack/css-color.svg"
                  imgpixel="./images/stack/css-color.png"
                  className="lang1-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon2"
                />
                <LangPixel
                  alt="js icon"
                  img="./images/stack/javascript-color.svg"
                  imgpixel="./images/stack/javascript-color.png"
                  className="lang1-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon3"
                />
                <LangPixel
                  alt="react icon"
                  img="./images/stack/react-color.svg"
                  imgpixel="./images/stack/react-color.png"
                  className="lang1-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon4"
                />
                <LangPixel
                  alt="typescript icon"
                  img="./images/stack/typescript-color.svg"
                  imgpixel="./images/stack/typescript-color.png"
                  className="lang1-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon5"
                />
              </div>
            </div>
            <div className="lang2 transform-origin[right] bg{clr-secondary-dark} p[1rem] radius[1rem] grow[1] &_>_div;flex,flex-wrap,pt[1rem],gap[1rem]">
              <h2 className="lang2-title fs[lg]|mq-max-1700px fs[xlg]|mq-min-1700px fw[bold] clr{clr-text}">
                Backend
              </h2>
              <div>
                <LangPixel
                  alt="node icon"
                  img="./images/stack/nodedotjs-color.svg"
                  imgpixel="./images/stack/node-color.png"
                  className="lang2-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon6"
                />
                <LangPixel
                  alt="express icon"
                  img="./images/stack/express-color.svg"
                  imgpixel="./images/stack/express-color.png"
                  className="lang2-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon7"
                />
                <LangPixel
                  alt="postgresql icon"
                  img="./images/stack/postgresql-color.svg"
                  imgpixel="./images/stack/postgresql-color.png"
                  className="lang2-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon8"
                />
              </div>
            </div>
          </div>
          <div className="lang3 transform-origin[top] flex[colum] align[center] bg{clr-secondary-dark} p[1rem] radius[1rem]">
            <h2 className="lang3-title fs[lg]|mq-max-1700px fs[xlg]|mq-min-1700px fw[bold] clr{clr-text}">
              {d("ferramentas")}
            </h2>
            <div className="flex flex-wrap pt[1rem] gap[1rem]">
              <LangPixel
                alt="git icon"
                img="./images/stack/git-color.svg"
                imgpixel="./images/stack/git-color.png"
                className="lang3-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon9"
              />
              <LangPixel
                alt="github icon"
                img="./images/stack/github-color.svg"
                imgpixel="./images/stack/github-color.png"
                className="lang3-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon10"
              />
              <LangPixel
                alt="docker icon"
                img="./images/stack/docker-color.svg"
                imgpixel="./images/stack/docker-color.png"
                className="lang3-icon &_img;w[50px]|mq-max-1700px &_img;w[75px]|mq-min-1700px icon11"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        draggable={false}
        className="bg{clr-secondary} stars image[pixelated] image[crisp-edges] w[100%] object-fit[cover] select[none] min-h[250px] max-h[1080px]"
        src="./images/transition.png"
        alt=""
      />
    </>
  );
}
