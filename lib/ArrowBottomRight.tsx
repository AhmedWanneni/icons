import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowBottomRight = ({
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
      d="M3.646 3.646a.5.5 0 0 0 0 .708L10.293 11H6a.5.5 0 0 0 0 1h5.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v4.293L4.354 3.646a.5.5 0 0 0-.708 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowBottomRight;
