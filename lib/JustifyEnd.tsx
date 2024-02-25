import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJustifyEnd = ({
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
      d="M13.95 1.5a.45.45 0 0 0-.9 0v12a.45.45 0 1 0 .9 0zM4 6h7v3H4zm7.25-1a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 3 9.25v-3.5A.75.75 0 0 1 3.75 5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgJustifyEnd;
