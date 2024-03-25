"use client";
import { useState, FunctionComponent, useEffect } from "react";

const InputRange: FunctionComponent<{ label: string; name: string }> = ({
  label,
  name,
}) => {
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    // console.log(value);
  }, [value]);
  return (
    <span className="flex flex-col gap-4">
      <label htmlFor={name}>{label}: </label>
      <input
        className="accent-amber-500"
        name={name}
        type="range"
        title={label}
        min={0}
        max={100}
        value={value}
        onChange={(event) => {
          setValue(Number(event.target.value));
        }}
      />
    </span>
  );
};

export default InputRange;
