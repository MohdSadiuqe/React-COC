import { useState, useCallback, useEffect ,useRef} from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  // refHook
  const passwordRef=useRef(null)
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {
      str += "123456789"
    }
    if (character) {
      str += "!@#$%^&*(){}"
    }
    for (let i = 0; i <length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, number, character])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded px-4 my-8 text-orange-400 bg-gray-">
    <h1 className="text-white text-center text-xl mb-4">
      Password Generator
    </h1>

    {/* Password + Copy */}
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />
      <button
      onClick={copyPassword}
      className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
      >
      Copy
      </button>
    </div>

    {/* Controls */}
    <div className="flex text-sm gap-x-4 text-orange-300">
      
      {/* Length */}
      <div className="flex items-center gap-x-2">
        <input
          type="range"
          min={6}
          max={39}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>

      {/* Numbers */}
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          checked={number}
          onChange={() => setNumber(prev => !prev)}
        />
        <label>Numbers</label>
      </div>

      {/* Characters */}
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          checked={character}
          onChange={() => setCharacter(prev => !prev)}
        />
        <label>Characters</label>
      </div>
    </div>
  </div>
</>
  )
}

export default App
