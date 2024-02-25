import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignStart = ({
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
      d="M1.5 1.05a.45.45 0 1 0 0 .9h12a.45.45 0 0 0 0-.9zM6 11V4h3v7zM5 3.75A.75.75 0 0 1 5.75 3h3.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlignStart;
