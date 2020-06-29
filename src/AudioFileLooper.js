import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

function BufferPlayer({ audioCtx, buffer }) {
    const startTime = useRef()
    const [position, setPosition] = useState(0);
    const raf = useRef()
    useEffect(() => {
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        source.connect(audioCtx.destination);
        source.start()
        startTime.current = audioCtx.currentTime
        const updatePosition = (() => {
            const currentPosition = (audioCtx.currentTime - startTime.current) % buffer.duration
            setPosition(currentPosition)
            raf.current = requestAnimationFrame(updatePosition)
        })
        updatePosition()
        return (() => {
            source.stop()
            cancelAnimationFrame(raf.current)
        })
    }, [audioCtx, buffer])
    return <progress className="progress is-primary" style={{ width: '100%' }} value={position} max={buffer.duration}>15%</progress>
}

export default function AudioFileLooper({ audioCtx, running, onClick, buffer }) {
    return <div><button onClick={onClick} className="button" style={{ margin: '1em' }}><
        FontAwesomeIcon icon={running ? faPause : faPlay} />
    </button>
        {running ?
            <BufferPlayer buffer={buffer} audioCtx={audioCtx} /> :
            <progress  style={{ width: '100%' }} value="0" max="100">15%</progress>
        }
    </div>
}