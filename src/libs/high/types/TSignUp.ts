import { TUser } from './TUser';

export type TSignUpRequest = {
  name: string;
  email: string;
  password: string;
};

export type TSignUpResponse = {
  user: TUser;
};
