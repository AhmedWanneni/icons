import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFile = ({
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
      d="M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2zm5.5.707L11.293 5H9zM2 2.5A1.5 1.5 0 0 1 3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFile;
