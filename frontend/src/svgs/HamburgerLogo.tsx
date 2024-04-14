import React from "react";

type HamburgerLogoProps = {
  onClick: () => void;
};

function HamburgerLogo({ onClick }: HamburgerLogoProps) {
  return (
    <svg
      onClick={onClick}
      width="30"
      height="18"
      viewBox="0 0 30 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.5C0 0.671573 0.671573 0 1.5 0H28.5C29.3284 0 30 0.671573 30 1.5C30 2.32843 29.3284 3 28.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM0 8.5C0 7.67157 0.671573 7 1.5 7H28.5C29.3284 7 30 7.67157 30 8.5C30 9.32843 29.3284 10 28.5 10H1.5C0.671573 10 0 9.32843 0 8.5ZM7.5 14C6.67157 14 6 14.6716 6 15.5C6 16.3284 6.67157 17 7.5 17H28.5C29.3284 17 30 16.3284 30 15.5C30 14.6716 29.3284 14 28.5 14H7.5Z"
        fill="#030439"
      />
    </svg>
  );
}

export default HamburgerLogo;
