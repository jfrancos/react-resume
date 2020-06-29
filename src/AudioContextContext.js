import React from 'react';
import OggmentedAudioContext from 'oggmented'

const AudioContextContext = React.createContext({
    nativeContext: new (window.AudioContext || window.webkitAudioContext)(),
    oggmentedContext: new OggmentedAudioContext()
})

// Is there someplace I should .close the audioContexts?

export default AudioContextContext