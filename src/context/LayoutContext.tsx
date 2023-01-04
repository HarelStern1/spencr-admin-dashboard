import { createContext, FC, ReactElement, useContext, useEffect, useState } from "react";

interface LayoutContextProviderprops {
  children: ReactElement | ReactElement[] | string;
}

interface LayoutContextType {
  isOpen: boolean;
  setIsOpen: any;
}

export const LayoutContext = createContext<LayoutContextType | null>(null);

const LayoutContextProvider: FC<LayoutContextProviderprops> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return <LayoutContext.Provider value={{ isOpen, setIsOpen }}>{children}</LayoutContext.Provider>;
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (context === null) {
    throw new Error("useLayoutContext must be used within a LayoutContext");
  }
  return context;
};

export default LayoutContextProvider;
