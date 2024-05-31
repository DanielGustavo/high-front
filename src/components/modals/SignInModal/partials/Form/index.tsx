import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Input from '@/components/Input';
import ButtonCTA from '@/components/ButtonCTA';

import { TFields, useValidation } from './useValidation';

import * as highLib from '@/libs/high';

import { useAuth } from '@/contexts/AuthContext';

import { TForm } from '@/components/types/modals/SignInModal/Form/TForm';

import { Container, InputsGroup } from './styles';

const Form: React.FC<TForm> = ({ onSignIn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { persistAuthData } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useValidation();

  async function onSubmit({ email, password }: TFields) {
    try {
      setIsLoading(true);
      const { token } = await highLib.signIn(email, password);

      const [, payload] = token.split('.');
      const user = JSON.parse(atob(payload));

      if (user.avatarFilename) {
        user.avatarFilename = `${process.env.NEXT_PUBLIC_HIGH_STATIC_BASE_PATH}/${user.avatarFilename}`;
      }

      persistAuthData(user as any, token);

      toast('Signed in successfully!', { type: 'success' });

      if (onSignIn) onSignIn();
    } catch (error: any) {
      toast(error.message, { type: 'error' });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <InputsGroup>
        <Input
          label="Email"
          placeholder="Insert your email"
          fitParent
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          type="password"
          label="Password"
          placeholder="Insert your password"
          fitParent
          {...register('password')}
          error={errors.password?.message}
        />
      </InputsGroup>

      <ButtonCTA
        type="submit"
        width="226px"
        variation="gray"
        isLoading={isLoading}
      >
        Sign in
      </ButtonCTA>
    </Container>
  );
};

export default Form;
