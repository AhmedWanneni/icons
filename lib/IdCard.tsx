import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIdCard = ({
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
      d="M14 11V4H1v7zm1-7v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1M2 5.25A.25.25 0 0 1 2.25 5h3.5a.25.25 0 0 1 .25.25v4.5a.25.25 0 0 1-.25.25h-3.5A.25.25 0 0 1 2 9.75zM7.5 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M7.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIdCard;
