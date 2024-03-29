import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboard = ({
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
    <rect width={14} height={8} x={0.5} y={3.5} stroke="currentColor" rx={1} />
    <path
      fill="currentColor"
      d="M2 5h1v1H2zm2 0h1v1H4zm2 0h1v1H6zm2 0h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm-1 2h1v1h-1zm1 2h1v1h-1zM9 7h1v1H9zM7 7h1v1H7zM5 7h1v1H5zM3 7h1v1H3zM2 9h1v1H2zm2 0h7v1H4z"
    />
  </svg>
);
export default SvgKeyboard;
