import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHobbyKnife = ({
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
      d="M12.354 13.354a.5.5 0 0 1-.707 0l-5.25-5.25A.5.5 0 0 1 6.316 8H5a.5.5 0 0 1-.472-.336l-2.4-6.9A.5.5 0 0 1 2.936.23l5.4 4.9a.5.5 0 0 1 .164.37v.317a.5.5 0 0 1 .104.08l5.25 5.25a.5.5 0 0 1 0 .707zM8.25 6.957l-.793.793L12 12.293l.793-.793zM3.717 2.288 5.355 7h.938L7.5 5.793V5.72z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHobbyKnife;
