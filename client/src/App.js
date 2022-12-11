import axios from 'axios';
import { useState } from 'react';


function App() {
  const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  const [message, setMessage] = useState('');
  const testResponse  = async ()=>{
    try{

      const response = await axiosInstance.get('/posts');
      console.log(response.data);
    }catch(error){
      console.log(error.message);
    }
  };
  testResponse();

  return (
    <div className="App">
      {message?<h1>{message}</h1>:<h1>Error</h1>}
    </div>
  );
}

export default App;
