import React, { forwardRef } from 'react';
import FeatherIcon from 'feather-icons-react';

import { TSearchInput } from '@/components/types/SearchInput/TSearchInput';

import { Container, InputWrapper } from './styles';

const SearchInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TSearchInput
> = ({ className, fitParent, ...props }, ref) => {
  return (
    <Container fitParent={fitParent}>
      <InputWrapper className={className}>
        <FeatherIcon icon="search" size="22px" strokeWidth={1} />

        <input {...props} ref={ref} />
      </InputWrapper>
    </Container>
  );
};

export default forwardRef(SearchInput);
