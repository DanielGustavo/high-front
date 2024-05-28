import React, { forwardRef } from 'react';
import FeatherIcon from 'feather-icons-react';

import { Container, ErrorMessage, InputWrapper, Label } from './styles';

import { TInput } from '@/components/types/Input/TInput';

const Input: React.ForwardRefRenderFunction<HTMLInputElement, TInput> = (
  { label, error, className, fitParent, ...props },
  ref
) => {
  return (
    <Container fitParent={fitParent}>
      {label && <Label>{label}</Label>}

      <InputWrapper className={className}>
        <input {...props} ref={ref} />

        {error && (
          <FeatherIcon strokeWidth="1.5px" icon="alert-circle" size="20px" />
        )}
      </InputWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default forwardRef(Input);
