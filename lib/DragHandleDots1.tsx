import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDragHandleDots1 = ({
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
    <circle cx={4.5} cy={2.5} r={0.6} fill="currentColor" />
    <circle cx={4.5} cy={4.5} r={0.6} fill="currentColor" />
    <circle cx={4.5} cy={6.499} r={0.6} fill="currentColor" />
    <circle cx={4.5} cy={8.499} r={0.6} fill="currentColor" />
    <circle cx={4.5} cy={10.498} r={0.6} fill="currentColor" />
    <circle cx={4.5} cy={12.498} r={0.6} fill="currentColor" />
    <circle cx={6.5} cy={2.5} r={0.6} fill="currentColor" />
    <circle cx={6.5} cy={4.5} r={0.6} fill="currentColor" />
    <circle cx={6.5} cy={6.499} r={0.6} fill="currentColor" />
    <circle cx={6.5} cy={8.499} r={0.6} fill="currentColor" />
    <circle cx={6.5} cy={10.498} r={0.6} fill="currentColor" />
    <circle cx={6.5} cy={12.498} r={0.6} fill="currentColor" />
    <circle cx={8.499} cy={2.5} r={0.6} fill="currentColor" />
    <circle cx={8.499} cy={4.5} r={0.6} fill="currentColor" />
    <circle cx={8.499} cy={6.499} r={0.6} fill="currentColor" />
    <circle cx={8.499} cy={8.499} r={0.6} fill="currentColor" />
    <circle cx={8.499} cy={10.498} r={0.6} fill="currentColor" />
    <circle cx={8.499} cy={12.498} r={0.6} fill="currentColor" />
    <circle cx={10.499} cy={2.5} r={0.6} fill="currentColor" />
    <circle cx={10.499} cy={4.5} r={0.6} fill="currentColor" />
    <circle cx={10.499} cy={6.499} r={0.6} fill="currentColor" />
    <circle cx={10.499} cy={8.499} r={0.6} fill="currentColor" />
    <circle cx={10.499} cy={10.498} r={0.6} fill="currentColor" />
    <circle cx={10.499} cy={12.498} r={0.6} fill="currentColor" />
  </svg>
);
export default SvgDragHandleDots1;
