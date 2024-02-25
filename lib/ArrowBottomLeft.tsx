import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowBottomLeft = ({
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
      d="M11.354 3.646a.5.5 0 0 1 0 .708L4.707 11H9a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 1 0v4.293l6.646-6.647a.5.5 0 0 1 .708 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowBottomLeft;
