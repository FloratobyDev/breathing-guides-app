import React from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};

function Label({ label, children }: Props) {
  return (
    <div>
      <h2 className="font-koulen text-2xl md:text-3xl text-secondary">{label}</h2>
      {children}
    </div>
  );
}

export default Label;
