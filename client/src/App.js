import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    //fetch response message from nodejs backend and store in state
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:80/node-server/");
        setMessage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
