import _ from 'lodash';
import React from 'react';
import './App.css';

import audios from './audio/input.json'
import Audio from './audio/Audio';
import { useLocalStorage } from 'react-use';

function App(props) {
  const [output, setOutput] = useLocalStorage('output', {})

  React.useEffect(() => {
    console.log("output", output)
  }, [output])

  return (
    <div>
      {_.map(audios, (base64, strKey) => (
        <Audio
          key={strKey}
          strKey={strKey}
          base64={base64}
          output={output}
          setOutput={setOutput}
        />
      ))}
    </div>
  )
}

export default App;