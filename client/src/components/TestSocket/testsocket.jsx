import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("ws://signal.isola.ir");

function App() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      // ارسال پیام به سرور از طریق socket.io
      socket.emit("send_message", message);
      setMessage(""); // پاک کردن فیلد پیام پس از ارسال
    }
  };

  return (
    <div className="App">
      <input
        value={message}
        placeholder="Message..."
        onChange={(e) => setMessage(e.target.value)} // بروزرسانی مقدار پیام
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
