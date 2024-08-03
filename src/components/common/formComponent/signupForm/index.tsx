import { FormProps } from "@/types/formTypes";
import useShowPassword from "@/hooks/useShowPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "../../InputComponent";
import ButtonComponent from "../../ButtonComponent";

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
    <form className="flex flex-col gap-30" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputComponent
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          register={register("email")}
          onBlur={() => handleBlur("email")}
          errorMessage={errors.email?.message?.toString()}
        />
      </div>
      <div>
        <InputComponent
          type="text"
          label="닉네임"
          placeholder="닉네임을 입력해주세요(최대20자)."
          onBlur={() => handleBlur("nickname")}
          register={register("nickname")}
          errorMessage={errors.nickname?.message?.toString()}
        />
      </div>
      <div>
        <div className="relative">
          <InputComponent
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            onBlur={() => handleBlur("password")}
            label="비밀번호"
            register={register("password")}
            errorMessage={errors.password?.message?.toString()}
          />
          <span
            onClick={() => togglePasswordVisibility("password")}
            className="absolute right-10 top-30 cursor-pointer"
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
      </div>
      <div>
        <div className="relative">
          <InputComponent
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="비밀번호를 한번 더 입력해주세요."
            register={register("passwordConfirm")}
            onBlur={() => handleBlur("passwordConfirm")}
            label="비밀번호확인"
            errorMessage={errors.passwordConfirm?.message?.toString()}
          />
          <span
            onClick={() => togglePasswordVisibility("passwordConfirm")}
            className="absolute right-10 top-30 cursor-pointer"
          >
            {showPasswordConfirm ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
      </div>
      <ButtonComponent text="가입하기" />
    </form>
  );
};

export default SignupForm;
