import signPageRequestInstance from "@/api/signPageRequest";
import { setCookie } from "@/utils/cookies";
import { useState } from "react";

const useSignApi = async (data: any, formType: string) => {
  const [requestStatus, setRequestStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  if (formType === "signup") {
    try {
      const response = await signPageRequestInstance.signUp(data);
      if (response.status === 200 || response.status === 201) {
        setRequestStatus("success");
        const userData = response.data;
        const accessToken = userData.accessToken;
        setCookie("accessToken", accessToken);
        setCookie("userData", userData);
      }
    } catch (error: any) {
      setRequestStatus("fail");
      setErrorMessage(error?.response?.data.message);
    }
  } else if (formType === "signin") {
    console.log("Signin Form Data:", data);
  }
  return { requestStatus, errorMessage };
};

export default useSignApi;
