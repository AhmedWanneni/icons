import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpaceBetweenHorizontally = ({
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
      d="M14.5 1a.5.5 0 0 0-.5.5V6h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5M5 6H1V1.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0V9h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpaceBetweenHorizontally;
