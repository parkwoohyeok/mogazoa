import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  onBlur: () => void;
  errorMessage?: string;
  register: UseFormRegisterReturn;
};

const InputComponent = ({
  label,
  placeholder,
  type,
  onBlur,
  errorMessage = undefined,
  register,
}: InputProps) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-white text-12">{label}</span>
      <input
        placeholder={placeholder}
        className="border-1 border-[#353542] bg-[#252530] rounded-s p-5 h-50 text-white"
        type={type}
        {...register}
        onBlur={onBlur}
      />
      {errorMessage && <p className="text-12 text-red">{errorMessage}</p>}
    </label>
  );
};

export default InputComponent;
