import React, { createContext, useState, type ReactNode } from "react";

interface TravelContextType {
  isDark: boolean;
  toggleTheme: () => void;
  isDisplay: boolean;
  toggleDisplay: () => void;
  isLogin: boolean;
  toggleLogin: () => void;
  isSideBar: boolean;
  toggleSideBar: () => void;
  
}

export const TravelContext = createContext<TravelContextType | undefined>(
  undefined
);

interface TravelProviderProps {
  children: ReactNode;
}

export const TravelProvider: React.FC<TravelProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isDisplay, setDisplay] = useState(true);
  const [isLogin, setLogin] = useState(true);
  const [isSideBar,setSideBar] = useState(false);


  const toggleTheme = () => setIsDark((prev) => !prev);

  const toggleDisplay = () => {
    setDisplay((prev) => !prev);
    setLogin(true);
  };

  const toggleLogin = () => {
    setLogin((prev) => !prev);
    setDisplay(true);
  };

  const toggleSideBar = () => {
    setSideBar((prev)=>!prev)
    setSideBar((prev)=>prev)
  }

  return (
    <TravelContext.Provider
      value={{
        isDark,
        toggleTheme,
        isDisplay,
        toggleDisplay,
        isLogin,
        toggleLogin,
        isSideBar,
        toggleSideBar
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};
