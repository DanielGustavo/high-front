import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export type TFields = {
  email: string;
  password: string;
};

export const useValidation = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
  });

  const hookFormValidation = useForm<TFields>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  return hookFormValidation;
};
