import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Input from '@/components/Input';
import ButtonCTA from '@/components/ButtonCTA';

import { TFields, useValidation } from './useValidation';

import * as highLib from '@/libs/high';

import { Container, InputsGroup } from './styles';

import { TForm } from '@/components/types/modals/SignUpModal/TForm';

const Form: React.FC<TForm> = ({ openSignInModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useValidation();

  async function onSubmit({ name, email, password }: TFields) {
    try {
      setIsLoading(true);
      const { user } = await highLib.signUp({ name, email, password });
      console.log(user);

      toast('Signed up successfully! Now, sign in', { type: 'success' });

      openSignInModal();
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
          label="Name"
          placeholder="Type your name"
          fitParent
          {...register('name')}
          error={errors.name?.message}
        />

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

        <Input
          type="password"
          label="Confirm your password"
          placeholder="Insert your password"
          fitParent
          {...register('passwordConfirmation')}
          error={errors.passwordConfirmation?.message}
        />
      </InputsGroup>

      <ButtonCTA
        type="submit"
        width="226px"
        variation="gray"
        isLoading={isLoading}
      >
        Sign up
      </ButtonCTA>
    </Container>
  );
};

export default Form;
