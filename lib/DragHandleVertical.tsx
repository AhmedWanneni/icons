import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDragHandleVertical = ({
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
      d="M4.1 12.5a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0zm2 0a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0zm2.4.4a.4.4 0 0 1-.4-.4v-10a.4.4 0 1 1 .8 0v10a.4.4 0 0 1-.4.4m1.6-.4a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDragHandleVertical;
