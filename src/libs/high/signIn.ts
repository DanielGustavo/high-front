import { apiHandler } from './apiHandler';

import { TSignInResponse } from './types/TSignIn';

export async function signIn(email: string, password: string) {
  try {
    const response = await apiHandler.post<TSignInResponse>('/signin', {
      email,
      password,
    });

    if (response.status === 200) {
      const { token } = response.data;
      apiHandler.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
}
