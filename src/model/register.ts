export interface RegisterEntity {
  login: string;
  password: string;
  password2: string;
}

export const createEmptyRegister = (): RegisterEntity => ({
  login: "",
  password: "",
  password2: ""
});
