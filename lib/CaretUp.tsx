import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaretUp = ({
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
      d="M4.182 8.818a.45.45 0 0 1 0-.636l3-3a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1-.636.636L7.5 6.136 4.818 8.818a.45.45 0 0 1-.636 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCaretUp;
