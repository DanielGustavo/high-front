import React from 'react';
import FeatherIcon from 'feather-icons-react';

import { Container, ErrorMessage, InputWrapper, Label } from './styles';

import { TInput } from '@/components/types/Input/TInput';

const Input: React.FC<TInput> = ({
  label,
  error,
  className,
  fitParent,
  ...props
}) => {
  return (
    <Container fitParent={fitParent}>
      {label && <Label>{label}</Label>}

      <InputWrapper className={className}>
        <input {...props} />

        {error && (
          <FeatherIcon strokeWidth="1.5px" icon="alert-circle" size="20px" />
        )}
      </InputWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Input;
