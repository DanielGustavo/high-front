import { apiHandler } from './apiHandler';

import { TSignUpRequest, TSignUpResponse } from './types/TSignUp';

export async function signUp({ name, email, password }: TSignUpRequest) {
  try {
    const response = await apiHandler.post('/signup', {
      name,
      email,
      password,
    });

    return response.data as TSignUpResponse;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
}
