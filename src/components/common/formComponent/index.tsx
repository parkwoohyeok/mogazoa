import { Toaster } from "react-hot-toast";
import { openToast } from "@/utils/openToast";
import useFormComponent from "@/hooks/useFormComponent";
import { signupSchema, signinSchema } from "@/utils/validationSchemas";
import { setCookie } from "@/utils/cookies";
import signPageRequestInstance from "@/api/signPageRequest";
import { useRouter } from "next/router";
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
      try {
        const response = await signPageRequestInstance.signUp(data);
        if (response.status === 200 || response.status === 201) {
          const userData = response.data;
          const accessToken = userData.accessToken;
          setCookie("accessToken", accessToken);
          openToast.success("로그인에 성공했습니다.");
          setTimeout(() => router.push("/"), 1000);
        }
      } catch (error: any) {
        console.log(error?.response?.data.message);
        openToast.error(error?.response?.data.message);
      }
    } else if (formType === "signin") {
      console.log("Signin Form Data:", data);
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
