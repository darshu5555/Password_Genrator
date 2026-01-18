import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LC, NC, SC, UC } from './data/PassChar'

function App() {

  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)
let [passwordlen,setPasswordLen]=useState(10)
let [fPass,setPass]=useState('')

  let createPassword=()=>{
    let finalPass=''
    let charSet=''
if(uppercase || lowercase || number || symbol){
  if(uppercase) charSet+=UC;
  if(lowercase) charSet+=LC;
  if(number) charSet+=NC;
  if(symbol) charSet+=SC;

  for(let i=0;i<passwordlen;i++){
    finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
    setPass(finalPass)
  }
}
  else{
  alert("Please Select One Checkbox...  ")
  }
}
  
let copyPass=()=>{
  navigator.clipboard.writeText(fPass)
  alert("Password Successfully  Copied...")

}

  return (
    <>
      <div className='passwordBox'>
        <h2>Password Generator</h2>
        <div className='passwordBoxin'>
          <input type="text" value={fPass} readOnly /><button onClick={copyPass}>Copy</button>
        </div>
        <div className='passLength'>
<label>Password Length</label>
<input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>{setPasswordLen(event.target.value)}}/>
        </div>

        <div className='passLength'>
<label>Include Uppercase Letters</label>
<input type='checkbox' checked={uppercase} onChange={()=>{setUppercase(!uppercase)}} />
        </div>

        <div className='passLength'>
<label>Include Lowercase Letters</label>
<input type='checkbox' checked={lowercase} onChange={()=>{setLowercase(!lowercase)}}/>
        </div>

        <div className='passLength'>
<label>Include Numbers</label>
<input type='checkbox' checked={number} onChange={()=>{setNumber(!number)}}/>
        </div>
        <div className='passLength'>
<label>Include Symbols</label>
<input type='checkbox' checked={symbol} onChange={()=>{setSymbol(!symbol)}} />
        </div>
        <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </>
  )
}

export default App
