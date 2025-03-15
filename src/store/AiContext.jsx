import { createContext, useState } from "react";
export const AIcontext = createContext({
  content: "",
  setContent: () => {},
});

const AIContextProvider = ({ children }) => {
  const [content, setContent] = useState("");
  return (
    <AIcontext.Provider value={{ content, setContent }}>
      {children}
    </AIcontext.Provider>
  );
};

export default AIContextProvider;
