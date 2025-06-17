import { useState, useRef, useEffect } from "react";

export default function Player() {
  const inputRef = useRef(null);
  const [playerName, setPlayerName] = useState(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])

  const handleSubmit = () => {
    setPlayerName(inputRef.current.value)
    inputRef.current.value = '' // Imperative code ALERT!
    inputRef.current.focus();
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

