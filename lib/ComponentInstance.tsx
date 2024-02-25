import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentInstance = ({
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
      d="M7.147 1.49a.5.5 0 0 1 .707 0l5.657 5.656a.5.5 0 0 1 0 .708L7.854 13.51a.5.5 0 0 1-.708 0L1.49 7.854a.5.5 0 0 1 0-.708zM7.5 2.55 2.55 7.5l4.95 4.95 4.95-4.95z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponentInstance;
