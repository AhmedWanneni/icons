import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewGrid = ({
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
      d="M7 2H1.5a.5.5 0 0 0-.5.5V7h6zm1 0v5h6V2.5a.5.5 0 0 0-.5-.5zM7 8H1v4.5a.5.5 0 0 0 .5.5H7zm1 5V8h6v4.5a.5.5 0 0 1-.5.5zM1.5 1A1.5 1.5 0 0 0 0 2.5v10A1.5 1.5 0 0 0 1.5 14h12a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgViewGrid;
