// import shootingstar from "./images/shooting_star.gif";
// import layer2 from "./images/Starry_night_Layer_7.png";
// import layer3 from "./images/Starry_night_Layer_6.png";
// import layer4 from "./images/Starry_night_Layer_5.png";
// import layer5 from "./images/Starry_night_Layer_4.png";
// import layer6 from "./images/Starry_night_Layer_3.png";
// import layer7 from "./images/Starry_night_Layer_2.png";
// import layer8 from "./images/Starry_night_Layer_1.png";
// import layer9 from "./images/Starry_night_Layer_0.png";
// import title_ptbr from "./images/title_ptbr.png";
// import title_middle_ptbr from "./images/title_middle_ptbr.png";
// import title_enus from "./images/title_enus.png";
// import title_middle_enus from "./images/title_middle_enus.png";
import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";
// import arrow from "./images/arrow.gif";
import { useDialecto } from "dialecto";

export default function Parallax() {
  const ref = useRef(null);
  const { currentLanguage } = useDialecto();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  function layer(speed: string) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollYProgress, [0, 1], ["0%", speed]);
  }

  const s_parallax = `image[pixelated] image[crisp-edges] w[100%] h[100%] object-fit[cover] select[none] min-h[400px] max-h[1080px]`;

  return (
    <div
      id="parallax"
      className="bg{clr-parallax} relative min-h[400px] max-h[1080px] grid grid-template-areas['stack'] h[100svh] &_*;grid-area[stack]"
      ref={ref}
    >
      <motion.img
        style={{ y: layer("-35%") }}
        className={`z[1] ${s_parallax}`}
        src="./images/shooting_star.gif"
        alt="layer1"
      />
      <motion.img
        style={{ y: layer("-30%") }}
        className={`z[2] ${s_parallax}`}
        src="./images/Starry_night_Layer_7.png"
        alt="layer2"
      />
      <motion.img
        style={{ y: layer("-25%") }}
        className={`z[3] ${s_parallax}`}
        src="./images/Starry_night_Layer_6.png"
        alt="layer3"
      />
      <motion.img
        style={{ y: layer("-20%") }}
        className={`z[4] ${s_parallax}`}
        src="./images/Starry_night_Layer_5.png"
        alt="layer4"
      />
      <motion.img
        style={{ y: layer("1%") }}
        className={`z[5] ${s_parallax}`}
        src="./images/Starry_night_Layer_4.png"
        alt="layer5"
      />
      <motion.img
        style={{ y: layer("25%") }}
        className={`z[6] ${s_parallax}`}
        src="./images/Starry_night_Layer_3.png"
        alt="layer6"
      />
      <motion.img
        style={{ y: layer("30%") }}
        className={`z[7] ${s_parallax}`}
        src="./images/Starry_night_Layer_2.png"
        alt="layer7"
      />
      <motion.img
        style={{ y: layer("35%") }}
        className={`z[8] ${s_parallax}`}
        src="./images/Starry_night_Layer_1.png"
        alt="layer8"
      />
      <motion.img
        style={{ y: layer("0%") }}
        className="z[7] min-h[400px] max-h[1080px] w[100%] my[auto] object-fit[cover] select[none] object-position[left] none|mq-max-1200px"
        src={
          currentLanguage() === "ptbr"
            ? "./images/title_ptbr.png"
            : "./images/title_enus.png"
        }
        alt="title"
      />
      <motion.img
        style={{ y: layer("0%") }}
        className="z[7] min-h[400px] max-h[1080px] w[100%] my[auto] object-fit[cover] select[none] object-position[center] none|mq-min-1200px"
        src={
          currentLanguage() === "ptbr"
            ? "./images/title_middle_ptbr.png"
            : "./images/title_middle_enus.png"
        }
        alt="title"
      />

      <img
        draggable="false"
        className={`z[15] ${s_parallax}`}
        src="./images/Starry_night_Layer_0.png"
        alt="layer9"
      />
      <div className="select[none] absolute w[100%] h[100%] flex z[1000]">
        <img
          src="./images/arrow.gif"
          alt=""
          draggable={false}
          className="image[pixelated] image[crisp-edges] w[25px] mx[auto] my[auto_3rem]"
        />
      </div>
    </div>
  );
}
