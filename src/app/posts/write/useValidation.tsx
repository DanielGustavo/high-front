import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export type TFields = {
  title: string;
  description?: string;
  content: string;
};

export const useValidation = () => {
  const schema = z.object({
    title: z.string().min(5).max(100),
    description: z.string().max(300).optional(),
    content: z.string().min(5).max(100000),
  });

  const hookFormObject = useForm<TFields>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  return hookFormObject;
};
