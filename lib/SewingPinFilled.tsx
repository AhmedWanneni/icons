import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSewingPinFilled = ({
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
      d="M10 3.5a2.5 2.5 0 0 1-2 2.45v7.55a.5.5 0 0 1-1 0V5.95a2.5 2.5 0 1 1 3-2.45"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSewingPinFilled;
