import signPageRequestInstance from "@/api/signPageRequest";
import { setCookie } from "@/utils/cookies";
import { useState } from "react";

const useSignApi = () => {
  const [requestStatus, setRequestStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("요청에 실패했습니다.");

  const signUp = async (data: any) => {
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
      setErrorMessage(error?.response?.data?.message);
    }
  };

  return { signUp, requestStatus, errorMessage };
};

export default useSignApi;
