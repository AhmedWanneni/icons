import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentPlaceholder = ({
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
      d="M12.803 7.146a.5.5 0 1 1 .707.708.5.5 0 0 1-.707-.708m-.707 1.415a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707m-1.414 1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707m-1.414 1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707M7.146 13.51a.5.5 0 1 1 .708-.707.5.5 0 0 1-.708.707"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M2.904 8.56a.5.5 0 1 0 .707.708.5.5 0 0 0-.707-.707m1.414 1.415a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707m1.414 1.414a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707M2.197 7.854a.5.5 0 0 0 .064-.63.506.506 0 0 0-.771-.078.5.5 0 0 0 .707.708M3.61 5.732a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m1.414-1.414a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707M6.44 2.904a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707M7.854 1.49a.5.5 0 1 0-.708.707.5.5 0 0 0 .708-.707m1.414 1.414a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m1.414 1.414a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707m1.414 1.414a.5.5 0 1 0-.707.707.5.5 0 0 0 .707-.707"
    />
  </svg>
);
export default SvgComponentPlaceholder;
