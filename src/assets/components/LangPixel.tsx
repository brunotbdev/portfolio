interface LangPixelProps {
  className: string;
  img: string;
  imgpixel: string;
  alt: string;
}

const s_pixel =
  "relative &:hover_:first-child,&:focus-visible_:first-child;opacity[0] &:hover_:last-child,&:focus-visible_:last-child;opacity[1] bg{clr-mudar} p[.7rem] radius[.5rem]";

export default function LangPixel({
  className,
  img,
  imgpixel,
  alt,
}: LangPixelProps) {
  return (
    <div className={`${s_pixel} ${className}`}>
      <img className="opacity[1]" src={img} alt={alt} />
      <img
        src={imgpixel}
        alt={alt}
        className="image[pixelated] image[crisp-edges] opacity[0] absolute top[50%] left[50%] transform[translate(-50%,_-50%)]"
      />
    </div>
  );
}
