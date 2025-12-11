import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/narwhal_spin.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://slackmojis.com/emojis/209-narwhal" target="_blank">
          <img src={viteLogo} className="logo" alt="Narwhal logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Zoe's React JS Final with Vite!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <span>{'🐳+🦄'.repeat(count)}</span>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Narwhal and React logos to learn more
      </p>
    </>
  )
}

export default App
