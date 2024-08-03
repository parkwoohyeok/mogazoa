import { Toaster } from "react-hot-toast";
import { openToast } from "@/utils/openToast";
import useFormComponent from "@/hooks/useFormComponent";
import { signupSchema, signinSchema } from "@/utils/validationSchemas";
import { useRouter } from "next/router";
import useSignApi from "@/hooks/useSignApi";
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
  const router = useRouter();
  const onSubmit = async (data: any) => {
    if (formType === "signup") {
      const { requestStatus, errorMessage } = await useSignApi(data, formType);
      if (requestStatus === "success") {
        openToast.success("로그인에 성공했습니다.");
        setTimeout(() => router.push("/"), 1000);
      }
      openToast.error(errorMessage);
    }
  };
  return (
    <>
      <Toaster position="bottom-center" />
      {Form ? <Form schema={schema} onSubmit={onSubmit} /> : null};
    </>
  );
};

export default FormComponent;
