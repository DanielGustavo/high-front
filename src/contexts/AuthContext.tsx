import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

import { TUser } from '@/libs/high/types/TUser';

interface AuthProps {
  logout: () => void;
  persistAuthData: (user: TUser, token: string) => void;
  token?: string;
  user?: TUser;
  authenticated: boolean;
}

const AuthContext = createContext({} as AuthProps);

export function useAuth(): AuthProps {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState(() => {
    return parseCookies()['high:token'] || undefined;
  });

  const [user, setUser] = useState(() => {
    const stringfiedUser = parseCookies()['high:user'] || undefined;

    const parsedUser = stringfiedUser ? JSON.parse(stringfiedUser) : undefined;
    return parsedUser as TUser | undefined;
  });

  const [authenticated, setAuthenticated] = useState(false);

  function persistAuthData(user: TUser, token: string) {
    const [, payload] = token.split('.');
    const parsedPayload = JSON.parse(atob(payload)) as any;

    const currentTimeInSeconds = new Date().getTime() / 1000;
    const maxAge = parsedPayload.exp - currentTimeInSeconds;

    setCookie(undefined, 'high:token', token, { maxAge });
    setCookie(undefined, 'high:user', JSON.stringify(user), { maxAge });

    setUser(user);
    setToken(token);
    setAuthenticated(!!user && !!token);
  }

  function logout() {
    destroyCookie(undefined, 'high:token');
    destroyCookie(undefined, 'high:user');

    setUser(undefined);
    setToken(undefined);
    setAuthenticated(false);
  }

  useEffect(() => {
    setAuthenticated(!!user && !!token);
  }, [user, token]);

  return (
    <AuthContext.Provider
      value={{ token, user, authenticated, persistAuthData, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
