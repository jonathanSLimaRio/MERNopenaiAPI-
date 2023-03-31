"use client"; 

import { useState } from "react";
import axios from "axios";
import styles from "../../styles/main.module.scss";
import Header from "../../components/Header";

export default function Main() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  console.log("prompt", prompt);
  console.log("response", response);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/chat", { prompt })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">
                Submit    
            </button>
          </div>
        </form>
        <div>
            <p>{response}</p>
        </div>
      </div>
    </div>
  );
}
