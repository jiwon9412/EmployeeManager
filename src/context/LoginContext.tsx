import { createContext, useState } from "react";

interface State {
  username?: string;
  useremail?: string;
  userId: string;
}

export type ContextType = {
  userinfo: State | undefined;
  changeUserinfo: (info: State) => void | null;
};

interface IProvider {
  children: React.ReactNode;
}

export const LoginContext = createContext<ContextType | null>(null);

export function LoginProvider({ children }: IProvider) {
  const [userinfo, setUserinfo] = useState<State | undefined>();
  const changeUserinfo = (info: State) => {
    setUserinfo(info);
    sessionStorage.setItem("userId", info.userId);
  };

  return (
    <LoginContext.Provider value={{ userinfo, changeUserinfo }}>
      {children}
    </LoginContext.Provider>
  );
}
