import { useState } from "react";
import ResponseBox from "./components/ResponseBox";
import AIChat from "./components/AIChat";
import AIContextProvider from "./store/AiContext";
import "./styles/global.css";

const App = () => {
  const [response, setResponse] = useState(false);

  return (
    <AIContextProvider>
      <div className="app-container">
        {response && <ResponseBox />}
        <AIChat setResponse={setResponse}></AIChat>
      </div>
    </AIContextProvider>
  );
};

export default App;
