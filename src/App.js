import _ from 'lodash';
import React from 'react';
import './App.css';

import audios from './audio/input.json'
import Audio from './audio/Audio';
import { useLocalStorage } from 'react-use';

function App(props) {
  const [output, setOutput] = useLocalStorage('output', {})

  React.useEffect(() => {
    // Download output if it has stabilised (1s delay)
    const timeout = setTimeout(() => downloadObjectAsJson(output, "output"), 1000);
    return function cleanup() {
      clearTimeout(timeout)
    }
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

function downloadObjectAsJson(exportObj, exportName) {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export default App;