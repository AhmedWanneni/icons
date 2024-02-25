import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJustifyStart = ({
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
      d="M1.05 13.5a.45.45 0 0 0 .9 0v-12a.45.45 0 1 0-.9 0zM11 9H4V6h7zm-7.25 1A.75.75 0 0 1 3 9.25v-3.5A.75.75 0 0 1 3.75 5h7.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgJustifyStart;
