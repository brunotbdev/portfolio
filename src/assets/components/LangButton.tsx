import { Earth } from "lucide-react";
import { useState } from "react";
import { useDialecto } from "dialecto";

export default function LangButton() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { changeLang } = useDialecto();

  return (
    <div className="relative select[none]">
      <button
        onClick={() => setIsLangOpen((prev) => !prev)}
        className="bg[transparent] p[.5rem] radius[50%] &:hover,&:focus-visible;bg[oklch(from_{clr-text}_l_c_h_/_0.2)],cursor[pointer]"
      >
        <Earth size={22} className="clr{clr-text}" />
      </button>
      {isLangOpen && (
        <>
          <div
            onClick={() => setIsLangOpen(false)}
            className="fixed top[0] left[0] w[100%] h[100%]"
          ></div>
          <ul
            className="flex[column] gap[.5rem] p[.7rem] radius[1.2rem] absolute bg{clr-secondary} right[0]|mq-min-500px right[-3.25rem]|mq-max-500px bottom[100] animation[dropdown_.5s_ease_forwards] opacity[0]"
            role="list"
          >
            <li>
              <button
                className="flex gap[.5rem] clr{clr-text} bg[transparent] &:hover,&:focus-visible;bg{clr-secondary-dark},cursor[pointer] p[.7rem] w[100%] radius[.5rem]"
                onClick={() => {
                  changeLang("ptbr");
                  setIsLangOpen(false);
                }}
              >
                <span>🇧🇷</span>Português
              </button>
            </li>
            <li>
              <button
                className="flex gap[.5rem] clr{clr-text} bg[transparent] &:hover,&:focus-visible;bg{clr-secondary-dark},cursor[pointer] p[.7rem] w[100%] radius[.5rem]"
                onClick={() => {
                  changeLang("enus");
                  setIsLangOpen(false);
                }}
              >
                <span>🇺🇸</span>English
              </button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
