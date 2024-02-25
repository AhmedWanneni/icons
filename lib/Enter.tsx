import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnter = ({
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
      d="M4.5 1a.5.5 0 0 0 0 1H12v11H4.5a.5.5 0 0 0 0 1H12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm2.104 3.896a.5.5 0 1 0-.708.708L7.293 7H.5a.5.5 0 0 0 0 1h6.793L5.896 9.396a.5.5 0 0 0 .708.708l2.25-2.25a.5.5 0 0 0 0-.708z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEnter;
