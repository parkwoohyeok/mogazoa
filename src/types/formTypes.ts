import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";

export type FormProps = {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors;
  handleBlur: (field: string) => Promise<void>;
  onSubmit: (data: FieldValues) => void;
};
