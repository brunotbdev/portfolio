import { useEffect, useRef } from "react";
import { animate, text, stagger, createScope, onScroll } from "animejs";
import type { Scope } from "animejs";

interface TitleProps {
  title: string;
  id: string;
  containerRef: React.RefObject<null>;
}

export default function Title({ id, title, containerRef }: TitleProps) {
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope({
      root: containerRef.current || undefined,
    }).add(() => {
      const { chars } = text.split("h1", {
        chars: { wrap: "clip" },
      });

      animate(chars, {
        y: [{ from: "-100%" }],
        duration: 500,
        ease: "linear",
        delay: stagger(50),
        autoplay: onScroll({
          enter: "bottom-=10% top",
          leave: "top bottom",
        }),
      });
    });

    return () => scope.current?.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1
      id={id}
      className="scroll-margin[3rem_0_0_0] clr{clr-text} fw[bold] fs[clamp(2rem,_7vw_+_1rem,_4.5rem)] text-wrap[nowrap]"
    >
      {title}
    </h1>
  );
}
