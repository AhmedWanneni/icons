import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnderline = ({
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
      d="M5 2.75a.5.5 0 0 0-1 0v5.3a3.5 3.5 0 0 0 7 0v-5.3a.5.5 0 1 0-1 0v5.3a2.5 2.5 0 1 1-5 0zM3.5 13.1a.4.4 0 1 0 0 .8h8a.4.4 0 0 0 0-.8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnderline;
