import { languagesMap } from "../utils/cards";
import type { Card } from "../utils/cards";
import { useDialecto } from "dialecto";

interface CardProps {
  card: Card;
}

const s_pd = "&:hover,&:focus-visible;rotate[1deg],scale[1.02]";
const s_nd = "&:hover,&:focus-visible;rotate[-1deg],scale[1.02]";
const s_card = "radius[1rem] shadow[0_0_8px_8px_#11111130]";

function random() {
  const value = Math.floor(Math.random() * 2);

  if (value === 0) return s_pd;
  if (value === 1) return s_nd;
}

export default function Card({ card }: CardProps) {
  const { d } = useDialecto();

  return (
    <div className={`${random()} ${s_card}`}>
      <h2
        className="py[.5rem] fs[xlg] text-align[center] fw[bold] clr{clr-text} radius[1rem_1rem_0_0]"
        style={{ background: card.background }}
      >
        {card.title}
      </h2>
      <div className="flex[column] radius[0_0_1rem_1rem] bg{clr-secondary-dark} center gap[1rem] grow[1] p[1rem]">
        <img
          className="select[none] w[100%] h[100%] object-fit[contain] radius[1rem]"
          src={card.img}
          alt="project image"
          draggable={false}
        />
        <div className="flex[column] w[100%] gap[.5rem] justify[space-around]">
          <div className="flex scrollbar-width[thin] overflow-x[scroll] gap[1rem] p[.5rem] radius[.5rem] bg{clr-mudar}">
            {card.languages.map((l) => (
              <div key={l} className="bg{clr-mudar-2} p[.3rem] radius[.3rem]">
                <img
                  draggable={false}
                  src={languagesMap[l]}
                  alt="language icon"
                  className="select[none] min-w[20px] w[20px]"
                />
              </div>
            ))}
          </div>

          <div className="p[.5rem] bg{clr-mudar} radius[.5rem]">
            <p
              title={String(d(card.description))}
              className="line-clamp[3] min-h[3.75rem] clr{clr-text}"
            >
              {d(card.description)}
            </p>
          </div>

          <div className="center gap[.5rem]">
            {card.links.map((l) => (
              <a
                rel="noopener noreferrer"
                target="_blank"
                draggable={false}
                key={l.icon}
                href={l.link}
                className="&:hover,&:focus-visible;bg{clr-mudar-2} grow[1] bg{clr-mudar} p[.7rem] radius[.5rem] center gap[.7rem]"
              >
                <img
                  src={languagesMap[l.icon]}
                  alt="icon"
                  className="select[none] w[20px]"
                  draggable={false}
                />
                <span className="clr{clr-text} fw[bold]">{l.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
