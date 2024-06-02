import { theme } from '@/styles/theme';

export const variations = {
  colors: {
    dark: {
      background: theme.colors.dark,
    },
    gray: {
      background: theme.colors.gray,
    },
    success: {
      background: theme.colors.success,
    },
  },
  sizes: {
    xSmall: {
      padding: `0 10px`,
      fontSize: theme.font.sizes.default,
      lineHeight: '25px',
    },
    small: {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      fontSize: theme.font.sizes.default,
      lineHeight: '20px',
    },
    medium: {
      padding: `${theme.spacing.xs} 20px`,
      fontSize: theme.font.sizes.medium,
      lineHeight: '24px',
    },
  },
};
