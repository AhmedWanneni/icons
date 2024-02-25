import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGrid = ({
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
      d="M12.5 2H8v5h5V2.5a.5.5 0 0 0-.5-.5m.5 6H8v5h4.5a.5.5 0 0 0 .5-.5zM7 7V2H2.5a.5.5 0 0 0-.5.5V7zM2 8v4.5a.5.5 0 0 0 .5.5H7V8zm.5-7A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGrid;
