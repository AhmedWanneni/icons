import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPinBottom = ({
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
      d="M13.5 13.95a.45.45 0 0 0 0-.9h-12a.45.45 0 1 0 0 .9zm-2.432-6.382a.45.45 0 1 0-.636-.636L7.95 9.414V1.5a.45.45 0 0 0-.9 0v7.914L4.568 6.932a.45.45 0 1 0-.636.636l3.25 3.25a.45.45 0 0 0 .636 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPinBottom;
