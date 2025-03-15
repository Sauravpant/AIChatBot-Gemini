import { useContext } from "react";
import { AIcontext } from "../store/AiContext";
const ResponseBox = () => {
  const { content } = useContext(AIcontext);
  return (
    <div className="response-box">
      <pre className="ai-response">{content}</pre>
    </div>
  );
};
export default ResponseBox;
