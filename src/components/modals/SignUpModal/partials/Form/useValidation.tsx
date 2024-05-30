import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export type TFields = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const useValidation = () => {
  const schema = z
    .object({
      name: z.string().min(5),
      email: z.string().email(),
      password: z.string().min(1).min(10),
      passwordConfirmation: z.string(),
    })
    .refine(
      ({ password, passwordConfirmation }) => passwordConfirmation === password,
      {
        message: 'Password confirmation and password must be the same',
        path: ['passwordConfirmation'],
      }
    );

  const hookFormValidation = useForm<TFields>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  return hookFormValidation;
};
