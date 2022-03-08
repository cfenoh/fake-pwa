import {FC, useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import ReloadPrompt from "./ReloadPrompt";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello my fake pwa</p>
        <Wallets/>
        <p>
          created by <code>Cfenoh</code>
        </p>
      </header>
      <ReloadPrompt />
    </div>
  )
}

export default App

type IWallet = {
  id:string;
  name:string;
}
const Wallets:FC = ()=>{
  const [wallets, setWallets] = useState<IWallet[]|[] >([])

  useEffect(()=>{
    fetch('https://ff19-96-22-128-7.ngrok.io/enveloppes').then((walletsRaw)=> walletsRaw.json()).then((wallets)=>{
      setWallets(wallets)
    })
  },[])

  if(!wallets) return null

  return (<ul>
    {
        wallets.map((wallet)=>(<li key={wallet.id}>{wallet.name}</li>))
    }
  </ul>)
}