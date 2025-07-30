import Card from "./Card";
import { cards } from "../utils/cards";
import { useRef } from "react";

import Line from "./Line";
import Title from "./Title";
import { useDialecto } from "dialecto";
import { memo } from "react";

export default memo(function Projects() {
  const ref = useRef(null);
  const { d } = useDialecto();

  return (
    <div ref={ref}>
      <Line>
        <Title id="projects" title={String(d("projetos"))} containerRef={ref} />
      </Line>

      <div className="grid grid-template-columns[repeat(auto-fit,_minmax(250px,_1fr))] gap[2.5rem] py[5rem_10rem]|mq-max-500px py[8rem_5rem]|mq-min-500px">
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
});
