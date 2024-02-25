import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHand = ({
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
      d="M6.811 1.647c-.19 1.232-.128 2.238-.043 3.658q.024.388.049.823a.5.5 0 0 1-.992.115l-.077-.436c-.104-.642-.264-1.552-.57-2.36-.316-.834-.73-1.406-1.244-1.587-.284-.099-.515-.017-.675.15a.82.82 0 0 0-.196.744c.152.59.383 1.163.635 1.764l.068.162c.23.545.47 1.117.65 1.71v.002c.146.484.24.867.315 1.17l.08.322A.5.5 0 0 1 4 8.387a10 10 0 0 1-.68-.669l-.122-.13c-.15-.16-.28-.3-.414-.428-.323-.309-.599-.48-.977-.516h-.003c-.242-.025-.389.02-.485.082-.099.063-.198.178-.28.386-.061.173-.023.518.155.857l.004.008c.204.408.548.839.984 1.316q.326.352.688.724l.01.011c.236.244.48.497.718.755.832.903 1.68 1.97 1.866 3.217h6.046c.055-1.565.367-2.732.778-3.865.158-.435.325-.85.496-1.277.327-.817.668-1.669.988-2.75.328-1.11.239-1.738.09-2.068-.144-.321-.37-.422-.48-.444-.243-.048-.343.013-.411.083-.103.104-.2.304-.278.624a9 9 0 0 0-.159 1.022l-.003.028c-.038.32-.08.677-.163.948a.54.54 0 0 1-.17.274.5.5 0 0 1-.366.118c-.289-.024-.46-.272-.466-.545-.009-.393.023-.79.042-1.182.036-.73.07-1.432.018-2.132V2.83c-.033-.499-.376-.827-.724-.906a.64.64 0 0 0-.466.06c-.132.076-.28.23-.378.53v.004c-.042.123-.084.36-.12.695a21 21 0 0 0-.085 1.082c-.02.326-.034.664-.048.968-.017.383-.031.712-.048.891a.5.5 0 0 1-.061.205c-.021.04-.134.251-.424.26a.51.51 0 0 1-.454-.259c-.06-.11-.066-.24-.07-.366l-.005-.445c-.003-.342-.003-.729-.003-.838 0-1.044 0-2.056-.092-3.066-.055-.403-.384-.64-.803-.644s-.765.227-.833.647m2.601-.285C9.215.448 8.4.008 7.654 0c-.79-.008-1.666.466-1.83 1.49v.003q-.062.397-.093.774c-.337-.593-.805-1.118-1.465-1.35a1.61 1.61 0 0 0-1.73.403 1.82 1.82 0 0 0-.446 1.667l.003.01c.172.671.431 1.306.683 1.908l.066.156c.18.427.352.838.497 1.252-.375-.332-.82-.605-1.436-.665-.414-.041-.8.027-1.125.236-.324.208-.537.52-.674.87l-.003.009c-.203.55-.035 1.209.204 1.666.269.536.691 1.05 1.139 1.54.226.247.467.496.706.743l.007.007q.359.37.704.74C3.81 12.49 4.5 13.464 4.5 14.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5c0-1.679.302-2.854.727-4.024.138-.38.295-.77.46-1.184.337-.843.711-1.779 1.043-2.9.366-1.239.326-2.133.043-2.762-.286-.638-.793-.935-1.197-1.015-.448-.089-.84-.01-1.15.216l-.004-.07c-.063-.95-.731-1.638-1.499-1.813a1.64 1.64 0 0 0-1.188.17 1.6 1.6 0 0 0-.323.244"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHand;
