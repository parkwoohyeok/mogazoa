import { useState } from "react";

const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState({
    passwordInput: false,
    passwordConfirmInput: false,
  });

  const togglePasswordVisibility = (
    id: "passwordInput" | "passwordConfirmInput"
  ) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return {
    showPassword: showPassword.passwordInput,
    showPasswordConfirm: showPassword.passwordConfirmInput,
    togglePasswordVisibility,
  };
};

export default useShowPassword;
