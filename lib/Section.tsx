import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSection = ({
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
      d="M2 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M2 5v5h11V5zm0-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M3.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M5.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M7.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M9.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M11.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M14 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M13.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSection;
