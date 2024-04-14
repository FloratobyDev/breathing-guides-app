import React from "react";

type Props = {
  isBlack?: boolean;
  height?: number;
  width?: number;
};

function Wind({ isBlack, height, width }: Props) {

  const color = isBlack ? "#030439" : "#FFFEE7";
  const h = height ? height : 32;
  const w = width ? width : 32;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10.6667H6.66667M9.33333 7.80952V7.33333C9.33333 5.49239 10.8257 4 12.6667 4C14.5076 4 16 5.49239 16 7.33333C16 9.17428 14.5076 10.6667 12.6667 10.6667H10.6667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.33325 18.6667H6.66659M19.9999 22.6667V23.3333C19.9999 25.9107 22.0893 28 24.6666 28C27.2439 28 29.3333 25.9107 29.3333 23.3333C29.3333 20.756 27.2439 18.6667 24.6666 18.6667H11.9999"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.66663 14.6667H10.6666M20 10.6667V10C20 7.42267 22.0893 5.33333 24.6666 5.33333C27.244 5.33333 29.3333 7.42267 29.3333 10C29.3333 12.5773 27.244 14.6667 24.6666 14.6667H16.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Wind;
