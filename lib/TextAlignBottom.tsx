import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextAlignBottom = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.9 5.5a.4.4 0 0 0-.8 0v7.034l-1.318-1.317a.4.4 0 0 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566l-1.318 1.317zM8.5 13a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1zM8 6.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTextAlignBottom;
