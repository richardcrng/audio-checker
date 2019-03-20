import React from 'react';
import { MdPauseCircleFilled, MdPlayCircleFilled } from 'react-icons/md';

function AudioButton(props) {
  const [Icon, clickHandler] = props.pause
    ? [MdPauseCircleFilled, props.handlePause]
    : [MdPlayCircleFilled, props.handlePlay]

  return (
    <Icon size={props.size} onClick={clickHandler} />
  )
}

export default AudioButton;