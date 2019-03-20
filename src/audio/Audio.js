import React from 'react';
import { useAudio } from 'react-use';
import AudioButton from './button/AudioButton';

function Audio(props) {
  const [audio, state, controls, ref] = useAudio({
    src: `data:audio/wav;base64,${props.base64}`
  })

  return (
    <div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <AudioButton pause={state.isPlaying} handlePlay={controls.play} handlePause={controls.pause} />
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </div>
  );
}

export default Audio;