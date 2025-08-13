import React, {
  createContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.withCredentials = true;

interface TravelContextType {
  isDark: boolean;
  toggleTheme: () => void;
  isDisplay: boolean;
  toggleDisplay: () => void;
  isLogin: boolean;
  toggleLogin: () => void;
  isSideBar: boolean;
  toggleSideBar: () => void;
  user: string | undefined;
  handleGoogleLogin: () => void;
  handleLogout: () => void;
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
  const [isSideBar, setSideBar] = useState(false);
  const [user, setUser] = useState<string>();

  const toggleTheme = () => setIsDark((prev) => !prev);

  const toggleDisplay = () => {
    setDisplay((prev) => !prev);
    setLogin(true);
  };

  const toggleLogin = () => {
    setLogin((prev) => !prev);
    setDisplay(true);
    setSideBar(false);
  };

  const toggleSideBar = () => {
    setSideBar((prev) => !prev);
    setSideBar((prev) => prev);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log("Error in Loading:" + err));
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google"; // Redirect to backend Google login
    toast.success('Welcome')
  };

const handleLogout = () => {
  axios.get("http://localhost:5000/auth/logout", { withCredentials: true })
    .then(() => {
      toast.info('Successfully Logout');
      setTimeout(() => {
        window.location.href = "/";
        setUser(undefined)
      }, 2000); 
    })
    .catch(() => {
      toast.error('Logout Failed');
    });
};



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
        toggleSideBar,
        handleGoogleLogin,
        user,
        handleLogout,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};
