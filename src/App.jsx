import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Easy' targetTime={1}></TimerChallenge>
        <TimerChallenge title='Not easy' targetTime={5}></TimerChallenge>
        <TimerChallenge title='Though shit' targetTime={10} ></TimerChallenge>
        <TimerChallenge title='Hardcore' targetTime={15} ></TimerChallenge>
      </div>
    </>
  );
}

export default App;
