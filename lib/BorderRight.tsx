import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderRight = ({
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
      d="M13.25 1v13h1.5V1z"
      clipRule="evenodd"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 5 7)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 5 13)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 3 7)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 3 13)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 7 7)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 1 7)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 7 13)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 1 13)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 7 5)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 1 5)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 7 3)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 1 3)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 7 9)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 1 9)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 7 11)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 1 11)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 9 7)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 9 13)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 11 7)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 11 13)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 5 1)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 3 1)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 7 1)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 1 1)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 9 1)"
    />
    <rect
      width={1}
      height={1}
      fill="currentColor"
      rx={0.5}
      transform="matrix(0 1 1 0 11 1)"
    />
  </svg>
);
export default SvgBorderRight;
