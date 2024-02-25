import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderTop = ({
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
      d="M14 1.75H1V.25h13z"
      clipRule="evenodd"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={10}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 8 10)"
    />
    <rect
      width={1}
      height={1}
      x={2}
      y={10}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 2 10)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={12}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 8 12)"
    />
    <rect
      width={1}
      height={1}
      x={2}
      y={12}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 2 12)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={8}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 8 8)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={14}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 8 14)"
    />
    <rect
      width={1}
      height={1}
      x={2}
      y={8}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 2 8)"
    />
    <rect
      width={1}
      height={1}
      x={2}
      y={14}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 2 14)"
    />
    <rect
      width={1}
      height={1}
      x={10}
      y={8}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 10 8)"
    />
    <rect
      width={1}
      height={1}
      x={10}
      y={14}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 10 14)"
    />
    <rect
      width={1}
      height={1}
      x={12}
      y={8}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 12 8)"
    />
    <rect
      width={1}
      height={1}
      x={12}
      y={14}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 12 14)"
    />
    <rect
      width={1}
      height={1}
      x={6}
      y={8}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 6 8)"
    />
    <rect
      width={1}
      height={1}
      x={6}
      y={14}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 6 14)"
    />
    <rect
      width={1}
      height={1}
      x={4}
      y={8}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 4 8)"
    />
    <rect
      width={1}
      height={1}
      x={4}
      y={14}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 4 14)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={6}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 8 6)"
    />
    <rect
      width={1}
      height={1}
      x={2}
      y={6}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 2 6)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={4}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 8 4)"
    />
    <rect
      width={1}
      height={1}
      x={2}
      y={4}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 2 4)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={10}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 14 10)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={12}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 14 12)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={8}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 14 8)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={14}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 14 14)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={6}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 14 6)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={4}
      fill="currentColor"
      rx={0.5}
      transform="rotate(-180 14 4)"
    />
  </svg>
);
export default SvgBorderTop;
