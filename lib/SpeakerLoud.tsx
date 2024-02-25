import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpeakerLoud = ({
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
      d="M7.47 1.05a.5.5 0 0 1 .28.45v12a.5.5 0 0 1-.807.395L3.221 11H1.5A1.5 1.5 0 0 1 0 9.5v-4A1.5 1.5 0 0 1 1.5 4h1.721l3.722-2.895a.5.5 0 0 1 .527-.054m-.72 1.472L3.7 4.895A.5.5 0 0 1 3.393 5H1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1.893a.5.5 0 0 1 .307.105l3.05 2.373zm3.528 1.326a.4.4 0 0 1 .555.111 6.41 6.41 0 0 1 0 7.081.4.4 0 0 1-.666-.443 5.61 5.61 0 0 0 0-6.194.4.4 0 0 1 .111-.555m2.4-2.418a.4.4 0 0 0-.61.518 8.6 8.6 0 0 1 0 11.104.4.4 0 0 0 .61.518 9.4 9.4 0 0 0 0-12.14"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpeakerLoud;
