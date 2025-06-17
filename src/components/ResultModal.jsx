import { useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom';

function formatTime(ms) {
  const seconds = Math.floor(ms / 1000);
  const hundredths = Math.floor((ms % 1000) / 10);
  return `${seconds}.${hundredths.toString().padStart(2, "0")} seconds`;
}

export default function ResultModal({ targetTime, ref, remainingTime, onReset }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      }
    }
  }, []);

  const userLost = remainingTime <= 0;
  const score =  Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {userLost && <h2>You LOST</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds</strong></p>
      <p>You stopped the timer with <strong>{formatTime(remainingTime)} seconds left.</strong></p>
      <form method='dialog' onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
}