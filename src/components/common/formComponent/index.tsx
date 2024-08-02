import { FieldValues } from "react-hook-form";
import useFormComponent from "@/hooks/useFormComponent";
import { signupSchema, signinSchema } from "@/utils/validationSchemas";

const formSchemas: { [key: string]: any } = {
  signup: signupSchema,
  signin: signinSchema,
};

type FormComponentProps = {
  formType: string;
};

const FormComponent: React.FC<FormComponentProps> = ({ formType }) => {
  const Form = useFormComponent(formType);
  const schema = formSchemas[formType];
  const onSubmit = (data: FieldValues) => {
    if (formType === "signup") {
      console.log("Signup Form Data:", data);
    } else if (formType === "signin") {
      console.log("Signin Form Data:", data);
    }
  };

  return Form ? <Form schema={schema} onSubmit={onSubmit} /> : null;
};

export default FormComponent;
