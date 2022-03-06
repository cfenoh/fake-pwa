import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ReloadPrompt from "./ReloadPrompt";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello my fake pwa</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          created by <code>Cfenoh</code>
        </p>
      </header>
      <ReloadPrompt />
    </div>
  )
}

export default App
