import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './header/Header';
import Home from './Home/Home';
import Maincontant from './Maincontant/Maincontant';

function Main(){
  const [myname,setName]=useState("tamilarasan");
  const date="tramika";
  const data=["tamil","tamil"]
  
  const getData=(name)=>{
    console.log(name)
  }
  return <div>
      {myname}
      
     <Header name={date} objname={data} changeName={setName} />
     <Home func={getData()} disname={myname} />
     <Maincontant changeName={setName}/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));    
root.render(<Main/>)  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
