import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderNone = ({
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
    <rect width={1} height={1} x={7} y={5.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={5.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={3.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={3.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={7.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={13.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={1.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={7.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={13.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={1.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={5} y={7.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={5} y={13.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={5} y={1.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={3} y={7.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={3} y={13.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={3} y={1.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={9} y={7.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={9} y={13.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={9} y={1.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={11} y={7.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={11} y={13.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={11} y={1.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={9.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={9.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={7} y={11.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={13} y={11.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={5.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={3.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={7.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={13.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={1.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={9.025} fill="currentColor" rx={0.5} />
    <rect width={1} height={1} x={1} y={11.025} fill="currentColor" rx={0.5} />
  </svg>
);
export default SvgBorderNone;
