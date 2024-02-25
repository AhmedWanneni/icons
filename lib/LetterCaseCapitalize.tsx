import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLetterCaseCapitalize = ({
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
      d="M3.69 2.75a.5.5 0 0 1 .467.32l3.21 8.32a.5.5 0 0 1-.933.36L5.383 9.025H2.01L.967 11.75a.5.5 0 0 1-.934-.358l3.19-8.32a.5.5 0 0 1 .467-.321m.002 1.893 1.363 3.532H2.337zm7.207.564c-1.64 0-2.89 1.479-2.89 3.403 0 2.024 1.35 3.402 2.89 3.402a3.06 3.06 0 0 0 2.255-.99v.508a.45.45 0 1 0 .9 0V5.72a.45.45 0 0 0-.9 0v.503A3 3 0 0 0 10.9 5.207m2.255 4.591V7.302c-.39-.721-1.213-1.244-2.067-1.244-.978 0-2.052.908-2.052 2.552 0 1.543.974 2.552 2.052 2.552.883 0 1.685-.667 2.067-1.364"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLetterCaseCapitalize;
