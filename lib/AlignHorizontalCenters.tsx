import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignHorizontalCenters = ({
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
      d="M3.25 2C2.56 2 2 2.56 2 3.25v8.5c0 .69.56 1.25 1.25 1.25h2.5C6.44 13 7 12.44 7 11.75v-8.5C7 2.56 6.44 2 5.75 2zM3 3.25A.25.25 0 0 1 3.25 3h2.5a.25.25 0 0 1 .25.25v8.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25zM9.25 4C8.56 4 8 4.56 8 5.25v4.5c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25v-4.5C13 4.56 12.44 4 11.75 4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlignHorizontalCenters;
