import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {

  const [message, setMessage] = useState('');

  const testResponse  = async ()=>{
    const response = await axios.get('http://localhost:5000/hello');
    response.data && setMessage(response.data);
  };

  !message && testResponse();

  return (
    <div className="App">
      {message?<h1>{message}</h1>:<h1>Error</h1>}
    </div>
  );
}

export default App;
