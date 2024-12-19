import React, { useEffect, useState } from "react";
import './App.css'

import { useWs } from "./hooks/useWs.tsx";

export default function MyApp() {
  const [ready, messageHistory, send] = useWs()
  const [messageToSend, useMessageToSend] = useState('')

  const handleClick = () => {
    send("" + messageToSend);
  }


  return (
    <div className="container" > 
      <label>
        Chat History:
      </label>
      <textarea className="chat-history" readOnly={true} value={JSON.stringify(messageHistory)}></textarea>
      <label>
        Write your post:
        <input className="chat-input" name="myInput" onChange={(e) => useMessageToSend(e.target.value)} />
    </label>
      <button className="button" onClick={handleClick}>Send message</button>
    </div>
  );
}
