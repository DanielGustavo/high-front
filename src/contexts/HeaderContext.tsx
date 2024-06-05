import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react';

type THeaderProps = {
  publishButtonIsDisabled: boolean;
  setPublishButtonIsDisabled: Dispatch<SetStateAction<boolean>>;
  publishButtonIsLoading: boolean;
  setPublishButtonIsLoading: Dispatch<SetStateAction<boolean>>;
  onClickPublishRef: React.MutableRefObject<undefined | (() => void)>;
  onSearchRef: React.MutableRefObject<
    undefined | ((search: string | undefined) => void)
  >;
};

const HeaderContext = createContext({} as THeaderProps);

export function useHeader() {
  return useContext(HeaderContext);
}

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [publishButtonIsDisabled, setPublishButtonIsDisabled] = useState(true);
  const [publishButtonIsLoading, setPublishButtonIsLoading] = useState(false);
  const onClickPublishRef = useRef(undefined as undefined | (() => void));
  const onSearchRef = useRef(
    undefined as undefined | ((search: string | undefined) => void)
  );

  return (
    <HeaderContext.Provider
      value={{
        publishButtonIsDisabled,
        setPublishButtonIsDisabled,
        onClickPublishRef,
        publishButtonIsLoading,
        setPublishButtonIsLoading,
        onSearchRef,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
