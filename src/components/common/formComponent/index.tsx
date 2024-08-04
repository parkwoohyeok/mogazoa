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
  const { signUp, requestStatus, errorMessage } = useSignApi();

  const onSubmit = async (data: any) => {
    if (formType === "signup") {
      await signUp(data);
      if (requestStatus === "success") {
        openToast.success("회원가입에 성공했습니다.");
        setTimeout(() => router.push("/"), 1000);
      } else {
        openToast.error(errorMessage);
      }
    }
    // else if (formType === "signin") {
    //   console.log("Signin Form Data:", data);
    // }
  };

  return (
    <>
      <Toaster position="bottom-center" />
      {Form ? <Form schema={schema} onSubmit={onSubmit} /> : null}
    </>
  );
};

export default FormComponent;
