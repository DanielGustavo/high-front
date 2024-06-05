import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

import { TUser } from '@/libs/high/types/TUser';
import * as high from '@/libs/high';

interface AuthProps {
  logout: () => void;
  persistAuthData: (user: TUser, token: string) => void;
  setUser: Dispatch<SetStateAction<TUser | undefined>>;
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

    const expires = new Date(parsedPayload.exp * 1000);

    setCookie(undefined, 'high:token', token, { expires });
    setCookie(undefined, 'high:user', JSON.stringify(user), { expires });

    setUser(user);
    setToken(token);
    setAuthenticated(!!user && !!token);
  }

  function logout() {
    destroyCookie({}, 'high:token');
    destroyCookie({}, 'high:user');

    setUser(undefined);
    setToken(undefined);
    setAuthenticated(false);

    document.location.reload();
  }

  useEffect(() => {
    setAuthenticated(!!user && !!token);

    if (token) {
      high.apiHandler.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
  }, [user, token]);

  return (
    <AuthContext.Provider
      value={{ token, user, authenticated, persistAuthData, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
