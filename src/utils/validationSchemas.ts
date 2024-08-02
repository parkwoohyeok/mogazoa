import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식으로 작성해 주세요.")
    .required("이메일은 필수 입력입니다."),
  nickname: yup
    .string()
    .max(20, "닉네임은 최대 20자까지 가능합니다.")
    .required("닉네임은 필수 입력입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 최소 8자 이상입니다.")
    .matches(
      /^[A-Za-z0-9!@#$%^&*]+$/,
      "비밀번호는 숫자, 영문, 특수문자로만 가능합니다."
    )
    .required("비밀번호는 필수 입력입니다."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인을 입력해주세요."),
});

export const signinSchema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식으로 작성해 주세요.")
    .required("이메일은 필수 입력입니다."),
  password: yup.string().required("비밀번호는 필수 입력입니다."),
});
