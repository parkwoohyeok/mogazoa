import { instance } from "./axios";

type signUpData = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
};

class SignPageRequest {
  async signUp(data: signUpData) {
    return await instance.post(`/auth/signUp`, {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      passwordConfirmation: data.passwordConfirm,
    });
  }
}

const signPageRequestInstance = new SignPageRequest();

export default signPageRequestInstance;
