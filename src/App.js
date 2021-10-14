import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'



const App = () => {
  const [files,setFiles] = useState([])
  const [select,setSelect] = useState(null)

  const changeHandler = (event) => {
    console.log(event.target.files[0])
    setSelect(event.target.files[0])
  }

  const handleSubmit = () => {
    const data = new FormData()
    data.append('file',select)
    axios.post("http://localhost:3001/files", data, { 
    })
    .then(response => {
      setFiles(files.concat(response))
      setSelect(null)
    })
  }

useEffect(() => {
  axios.get("http://localhost:3001/files").then(response => {
    setFiles(response.data)
}) 
},[]) 

  
  return(
    <div>
      <input type="file" name="file" onChange={changeHandler}></input> <br/> <br/>
      <button type="submit" onClick={handleSubmit}>Upload</button>
    </div>
  )
}


export default App;
