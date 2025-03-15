import { useContext, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AIcontext } from "../store/AiContext";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const AIChat = ({ setResponse }) => {
  const getResponse = async (prompt) => {
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    return response;
  };
  const { setContent } = useContext(AIcontext);
  const inputValue = useRef(null);
  const handleOnClick = async () => {
    setResponse(true);
    const prompt = inputValue.current.value;
    inputValue.current.value = "";
    const content = await getResponse(prompt);
    console.log(content);
    setContent(content);
  };
  return (
    <center className="chat-box">
      <input type="text" placeholder="Ask Anything" ref={inputValue} />
      <button onClick={handleOnClick}>
        <IoMdSend />
      </button>
    </center>
  );
};

export default AIChat;
