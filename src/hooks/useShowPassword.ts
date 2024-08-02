import { useState } from "react";

const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const togglePasswordVisibility = (id: string) => {
    if (id === "password") {
      setShowPassword(!showPassword);
    } else setShowPasswordConfirm(!showPasswordConfirm);
  };

  return { showPassword, showPasswordConfirm, togglePasswordVisibility };
};

export default useShowPassword;
