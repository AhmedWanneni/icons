import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHalf2 = ({
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
      d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877m0 .95a5.673 5.673 0 0 0 0 11.346z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHalf2;
