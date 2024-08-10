import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label?: string;
  type: string;
  placeholder: string;
  onBlur: () => void;
  errorMessage?: string;
  register: UseFormRegisterReturn;
};

const InputComponent = ({
  label = undefined,
  placeholder,
  type,
  onBlur,
  errorMessage = undefined,
  register,
}: InputProps) => {
  return (
    <label className="flex flex-col gap-2">
      {label && <span className="text-white text-12 mb-3">{label}</span>}
      <input
        placeholder={placeholder}
        className={`border-1 rounded-s p-5 h-50 text-white bg-[#252530] ${
          errorMessage ? "border-red" : "border-[#353542]"
        } focus:border-blue`}
        type={type}
        {...register}
        onBlur={onBlur}
      />
      {errorMessage && <p className="text-12 text-red">{errorMessage}</p>}
    </label>
  );
};

export default InputComponent;
