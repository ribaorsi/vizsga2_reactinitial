import React, { useEffect, useState } from "react"
import axios from "axios";

const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [clients, setClients] = useState("");

  const buttonClick = async () => {
    await axios.get("https://demoapi.com/api/vet/clients?search=AMIT-A-FELHASZN%C3%81L%C3%93-%C3%8DRT")
    .then((response) => {
      setClients(response.data);
    });
  }

  return (
    <div>
      <h1>Veteranian admin-clients</h1>
      <input 
        type="text" 
        value ={inputValue}
        onChange={(e) => setInputValue(e.target.value)} /> 
        <button disabled = {inputValue.length < 3}onClick={() => buttonClick}>Search Clients</button>
    </div>
  )
}

export default App
