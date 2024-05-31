import styled from 'styled-components';

export const MenuUserDataSection = styled.div`
  border-bottom: 1px ${({ theme }) => theme.colors.lightBlue} solid;
  padding-bottom: ${({ theme }) => theme.spacing.sm};

  display: flex;
  flex-direction: column;
  gap: 4px !important;

  * {
    color: ${({ theme }) => theme.colors.lightGray2};
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;
