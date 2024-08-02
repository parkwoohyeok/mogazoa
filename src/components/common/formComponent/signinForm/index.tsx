import React, { useState } from "react";
import { FormProps } from "@/types/formTypes";
import useShowPassword from "@/hooks/useShowPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SigninForm: React.FC<FormProps> = ({ schema, onSubmit }) => {
  const { showPassword, togglePasswordVisibility } = useShowPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleBlur = async (field: string) => {
    await trigger(field);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>이메일</label>
        <input
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email")}
          onBlur={() => handleBlur("email")}
        />
        {errors.email && <p>{errors.email?.message?.toString()}</p>}
      </div>
      <div>
        <label>비밀번호</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            {...register("password")}
            onBlur={() => handleBlur("password")}
          />
          <span
            onClick={() => togglePasswordVisibility("password")}
            style={{ position: "absolute", right: "10px", cursor: "pointer" }}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
        {errors.password && <p>{errors.password?.message?.toString()}</p>}
      </div>
      <button type="submit">로그인하기</button>
    </form>
  );
};

export default SigninForm;
