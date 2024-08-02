import { FormProps } from "@/types/formTypes";
import useShowPassword from "@/hooks/useShowPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SignupForm: React.FC<FormProps> = ({ schema, onSubmit }) => {
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
  const { showPassword, showPasswordConfirm, togglePasswordVisibility } =
    useShowPassword();

  return (
    <form
      className="flex flex-col justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
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
        <label>닉네임</label>
        <input
          type="text"
          placeholder="닉네임을 입력해주세요(최대20자)."
          {...register("nickname")}
          onBlur={() => handleBlur("nickname")}
        />
        {errors.nickname && <p>{errors.nickname.message?.toString()}</p>}
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
        {errors.password && <p>{errors.password.message?.toString()}</p>}
      </div>
      <div>
        <label>비밀번호 확인</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="비밀번호를 한번 더 입력해주세요."
            {...register("passwordConfirm")}
            onBlur={() => handleBlur("passwordConfirm")}
          />
          <span
            onClick={() => togglePasswordVisibility("passwordConfirm")}
            style={{ position: "absolute", right: "10px", cursor: "pointer" }}
          >
            {showPasswordConfirm ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
        {errors.passwordConfirm && (
          <p>{errors.passwordConfirm.message?.toString()}</p>
        )}
      </div>
      <button type="submit">가입하기</button>
    </form>
  );
};

export default SignupForm;
