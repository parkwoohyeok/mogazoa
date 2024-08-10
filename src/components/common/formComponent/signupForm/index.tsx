import { FormProps } from "@/types/formTypes";
import useShowPassword from "@/hooks/useShowPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "../../InputComponent";
import ButtonComponent from "../../ButtonComponent";
import Image from "next/image";

const SignupForm: React.FC<FormProps> = ({ schema, onSubmit }) => {
  const eyeOn = "/images/eyeOn.png";
  const eyeOff = "/images/eyeOff.png";

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
      <InputComponent
        type="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        register={register("email")}
        onBlur={() => handleBlur("email")}
        errorMessage={errors.email?.message?.toString()}
      />

      <InputComponent
        type="text"
        label="닉네임"
        placeholder="닉네임을 입력해주세요(최대20자)."
        onBlur={() => handleBlur("nickname")}
        register={register("nickname")}
        errorMessage={errors.nickname?.message?.toString()}
      />

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
          className="absolute right-10 top-40 cursor-pointer"
        >
          {showPassword ? (
            <Image src={eyeOn} width={20} height={20} alt="eyeOn" />
          ) : (
            <Image src={eyeOff} width={20} height={20} alt="eyeOff" />
          )}
        </span>
      </div>

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
          className="absolute right-10 top-40 cursor-pointer"
        >
          {showPasswordConfirm ? (
            <Image src={eyeOn} width={20} height={20} alt="eyeOn" />
          ) : (
            <Image src={eyeOff} width={20} height={20} alt="eyeOff" />
          )}
        </span>
      </div>

      <ButtonComponent type="primary">가입하기</ButtonComponent>
    </form>
  );
};

export default SignupForm;
