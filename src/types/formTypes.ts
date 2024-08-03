import { FieldValues } from "react-hook-form";
import { AnyObjectSchema } from "yup";

export type FormProps = {
  schema: AnyObjectSchema;
  onSubmit: (data: FieldValues) => void;
};
