import './App.css';
import { useState } from 'react';

function App() {
  const formInput = {ad: "", enlem: "", boylam: ""}
  const [root, setRoot] = useState([formInput])
  const [data, setData] = useState([])
  const [buttonDisabled, setButtonDisabled] = useState(true)
  
  const onChangeInput = (e, index) => {
    const {name,value} = e.target;
    const list = [...root];
    list[index][name] = value;
    setRoot(list);


    if(e.target.value !== ""){
      setButtonDisabled(false);
    }else if(e.target.value == ""){
      setButtonDisabled(true);
    }
    // setRoot({...root, [e.target.name]: e.target.value})
    // console.log(root)
  } 
  const onSubmit = () => {
   setData([...data, root])
   console.log(JSON.stringify(data))
  }
  const addInput = () => {
    setRoot([...root, formInput])
  }

  return (
    <div className="App flex justify-evenly">
    <div>
    {root.map((singleRoot, index) => (
      <div className='flex justify-center items-center gap-x-8 mb-4' key={index}>
        <input className='border-2 border-gray-500 px-4 py-1 rounded-lg' name='ad' value={singleRoot.ad} onChange={(e) => onChangeInput(e,index)} placeholder="Adres girin"/>
        <input className='border-2 border-gray-500 px-4 py-1 rounded-lg' name='enlem' value={singleRoot.enlem} onChange={(e) => onChangeInput(e,index)} placeholder="Enlem girin"/>
        <input className='border-2 border-gray-500 px-4 py-1 rounded-lg' name='boylam' value={singleRoot.boylam} onChange={(e) => onChangeInput(e,index)} placeholder="Boylam girin"/>
      </div>
    ))}
      <div className='flex justify-center gap-x-8 mb-10'>
      <button disabled={buttonDisabled} className='border-2 border-green-600 bg-green-600 text-white px-3 py-1 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed' onClick={onSubmit}>Kaydet</button>
      <button className='border-2 border-blue-400 bg-blue-400 text-white px-3 py-1 rounded-lg' onClick={addInput}>Yeni Input Ekle</button>
      </div>
      </div> 
      {data && 
       <div className='flex justify-center items-center'>
       <ul>
         {
           data.map((d,i) =>(
             <li className='border-2 border-green-800 text-white bg-green-800 px-4 py-2 mt-2' key={i}>{JSON.stringify(d)}</li>
           ))
         }
       </ul>
       </div>  
      }
      
         
    </div>
  );
}

export default App;
