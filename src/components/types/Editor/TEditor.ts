export type TEditor = {
  error?: string;
  onChange?: (htmlText?: string, text?: string) => void;
  defaultValue?: string;
};
