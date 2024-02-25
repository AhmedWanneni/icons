import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayout = ({
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
      d="M9 2H6v11h3zm1 0v11h2.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5zM2.5 2H5v11H2.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5m0-1A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLayout;
