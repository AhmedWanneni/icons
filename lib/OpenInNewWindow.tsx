import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOpenInNewWindow = ({
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
      d="M13 12a1 1 0 0 1-1 1H8.5a.5.5 0 0 1 0-1H12V3H3v3.5a.5.5 0 0 1-1 0V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 6.5h3v3"
    />
    <path stroke="currentColor" strokeLinecap="round" d="m2.5 12.5 6-6" />
  </svg>
);
export default SvgOpenInNewWindow;
