import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderLeft = ({
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
      d="M1.75 1v13H.25V1z"
      clipRule="evenodd"
    />
    <rect
      width={1}
      height={1}
      x={10}
      y={7}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 10 7)"
    />
    <rect
      width={1}
      height={1}
      x={10}
      y={13}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 10 13)"
    />
    <rect
      width={1}
      height={1}
      x={12}
      y={7}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 12 7)"
    />
    <rect
      width={1}
      height={1}
      x={12}
      y={13}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 12 13)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={7}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 8 7)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={7}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 14 7)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={13}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 8 13)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={13}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 14 13)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={5}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 8 5)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={5}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 14 5)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={3}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 8 3)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={3}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 14 3)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={9}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 8 9)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={9}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 14 9)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={11}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 8 11)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={11}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 14 11)"
    />
    <rect
      width={1}
      height={1}
      x={6}
      y={7}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 6 7)"
    />
    <rect
      width={1}
      height={1}
      x={6}
      y={13}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 6 13)"
    />
    <rect
      width={1}
      height={1}
      x={4}
      y={7}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 4 7)"
    />
    <rect
      width={1}
      height={1}
      x={4}
      y={13}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 4 13)"
    />
    <rect
      width={1}
      height={1}
      x={10}
      y={1}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 10 1)"
    />
    <rect
      width={1}
      height={1}
      x={12}
      y={1}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 12 1)"
    />
    <rect
      width={1}
      height={1}
      x={8}
      y={1}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 8 1)"
    />
    <rect
      width={1}
      height={1}
      x={14}
      y={1}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 14 1)"
    />
    <rect
      width={1}
      height={1}
      x={6}
      y={1}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 6 1)"
    />
    <rect
      width={1}
      height={1}
      x={4}
      y={1}
      fill="currentColor"
      rx={0.5}
      transform="rotate(90 4 1)"
    />
  </svg>
);
export default SvgBorderLeft;
