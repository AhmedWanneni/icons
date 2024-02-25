import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAvatar = ({
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
      d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.97 4.97 0 0 1 7.5 9.025c1.762 0 3.31.916 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827m3.482 10.152A4.02 4.02 0 0 0 7.5 9.975a4.02 4.02 0 0 0-3.482 2.004A5.65 5.65 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194M5.15 6.505a2.35 2.35 0 1 1 4.7 0 2.35 2.35 0 0 1-4.7 0m2.35-1.4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAvatar;
