import React from 'react';
import { useAudio } from 'react-use';
import AudioButton from './button/AudioButton';
import { MdFastRewind, MdFastForward } from 'react-icons/md';

function Audio(props) {
  const [audio, state, controls, ref] = useAudio({
    src: `data:audio/wav;base64,${props.base64}`
  })

  return (
    <div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <MdFastRewind size={40} onClick={() => controls.seek(state.time - 5)} />
      <AudioButton
        pause={state.isPlaying}
        handlePlay={controls.play}
        handlePause={controls.pause}
        size={40}
      />
      <MdFastForward size={40} onClick={() => controls.seek(state.time + 5)} />
      <br />
    </div>
  );
}

export default Audio;