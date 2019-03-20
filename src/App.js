import React from 'react';
import './App.css';

import { audios } from './audio/audio.json'
import Audio from './audio/Audio';

function App(props) {
  return (
    <div>
      {audios.map(base64 => (
        <Audio
          base64={base64}
          key={base64}
        />
      ))}
    </div>
  )
}

export default App;