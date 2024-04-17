import classNames from "classnames";
import React, { useMemo, useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

type Props = {
  label: string;
  values: string[];
  onSubmit: (value: string) => void;
};

function Dropdown({ label, values, onSubmit }: Props) {
  const [show, setShow] = useState(false);
  const [selectLabels, setSelectLabels] = useState<string[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  const svgClass = classNames("transform transition-all duration-100", {
    "rotate-180": !show,
  });

  const combinedLabels = useMemo(() => {
    if (selectLabels.length === 0) return "";
    if (selectLabels.length === 1) return selectLabels[0];
    if (selectLabels.length >= 2) {
      return "Multiple";
    }
    if (selectLabels.length > 1) {
      return selectLabels.join(", ");
    }
  }, [selectLabels]);

  useOutsideClick(divRef, show, () => {
    setShow(false);
  });

  return (
    <div
      data-testid={label}
      ref={divRef}
      className="rounded-md bg-primary relative hover:darken px-4 py-2 cursor-pointer select-none"
      onClick={() => setShow(!show)}
      role="button"
    >
      <div className="flex justify-between items-center font-kodchasan">
        <p className="text-xs lg:text-sm font-semibold capitalize">{combinedLabels || label}</p>
        <svg
          className={svgClass}
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.86603 7.5C5.48113 8.16667 4.51887 8.16667 4.13397 7.5L0.669874 1.5C0.284974 0.833333 0.766099 -8.94676e-07 1.5359 -8.27378e-07L8.4641 -2.21695e-07C9.2339 -1.54397e-07 9.71503 0.833333 9.33013 1.5L5.86603 7.5Z"
            fill="#030439"
          />
        </svg>
      </div>
      {show && (
        <div data-testid="dropdown-values" className="absolute top-9 rounded-md shadow-md inset-x-0 bg-primary p-1 z-10 my-1">
          {values.map((value) => {
            const pClasses = classNames(
              "px-2 py-1.5 my-0.5 rounded-md hover:bg-secondary hover:text-primary cursor-pointer font-kodchasan text-xs md:text-sm capitalize",
              {
                "bg-secondary text-primary": selectLabels.includes(value),
              }
            );
            return (
              <p
                key={value}
                className={pClasses}
                onClick={() => {
                  onSubmit(value);

                  if (selectLabels.includes(value)) {
                    setSelectLabels(
                      selectLabels.filter((label) => label !== value)
                    );
                  } else {
                    setSelectLabels([...selectLabels, value]);
                  }

                  setShow(false);
                }}
              >
                {value}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
