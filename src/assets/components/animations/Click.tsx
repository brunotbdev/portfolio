interface ClickProps {
  x: number;
  y: number;
}
// import clicksprite from "/images/clicksprite.png";

const size = 50;
const scale = size / 19;

export default function Click({ x, y }: ClickProps) {
  return (
    <div
      className="transform[translate(-55%,_-55%)] bg-repeat[no-repeat] animation[click_400ms_steps(5)_forwards] absolute z[1010] image[pixelated] image[crisp-edges] select[none] pointer[none]"
      style={{
        left: x,
        top: y,
        backgroundImage: `url("./images/clicksprite.png")`,
        backgroundSize: `${95 * scale}px ${19 * scale}px`,
        width: size,
        height: size,
      }}
    ></div>
  );
}
