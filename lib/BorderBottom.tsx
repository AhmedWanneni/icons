import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderBottom = ({
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
      d="M1 13.25h13v1.5H1z"
      clipRule="evenodd"
    />
    <rect width={1} height={1} x={7} y={5} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={5} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={3} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={3} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={7} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={1} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={7} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={1} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={5} y={7} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={5} y={1} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={3} y={7} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={3} y={1} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={9} y={7} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={9} y={1} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={11} y={7} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={11} y={1} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={9} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={9} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={11} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={11} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={5} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={3} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={7} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={1} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={9} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={11} fill="currentColor" rx={0.5} />
  </svg>
);
export default SvgBorderBottom;
