import React, { useContext, useEffect, useState, useRef } from "react";
import AudioContextContext from "./AudioContextContext";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import AudioFileLooper from "./AudioFileLooper";

const [select, loading, ready, playing] = Array.from({ length: 4 }, Symbol);

const OggmentedContent = () => {
  const { oggmentedContext } = useContext(AudioContextContext);
  const [browser, setBrowser] = useState();

  useEffect(() => {
    oggmentedContext.nativeVorbisLevel().then((level) => setBrowser(level));
  }, [oggmentedContext]);

  const content = {
    webkit: (
      <>
        <p>
          <b>
            We seem to be running inside a browser that doesn’t natively support
            ogg vorbis. This is expected for Safari, and all the iOS browsers.
          </b>
        </p>
      </>
    ),
    blink: (
      <>
        <p>
          <b>
            Oggmented has detected that it’s running in a browser with buggy ogg
            vorbis support. This is expected for Browsers using the Blink
            engine: Brave, Opera, Chrome, etc.{" "}
          </b>{" "}
          Blink uses ffmpeg to decode vorbis, which has a bug specific to vorbis
          where it adds a few extra samples at the end, resulting in a popping
          sound if you were to loop some audio that’s meant to sound smooth when
          looped. For example with the file produced by{" "}
          <code>
            sox -nr 44100 triangle.ogg synth .75 triangle 440 gain -20
          </code>
          :
        </p>

        <LoopDemo />
      </>
    ),
    gecko: (
      <>
        <p>
          <b>
            Oggmented has detected that it’s running in a browser that has full
            ogg vorbis support. This is expected for Firefox.
          </b>{" "}
          Check out this page in some different browsers, for some different
          results.
        </p>
      </>
    ),
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Ogg Vorbis and your browser</h2>
      <p>
        Audio capabilities in a browser come from their <i>Engines</i>:{" "}
        <a href="https://en.wikipedia.org/wiki/Blink_(browser_engine)#Engine">
          Blink
        </a>{" "}
        is the engine for Brave, Opera, and Chrome.{" "}
        <a href="https://en.wikipedia.org/wiki/WebKit">WebKit</a> is the engine
        for Safari and all iOS browsers (e.g. Chrome on an iPhone uses Webkit,
        not Blink).{" "}
        <a href="https://en.wikipedia.org/wiki/Gecko_(software)">Gecko</a> is
        the engine for Firefox.
      </p>
      <br />
      <div className="content">{content[browser]}</div>
      <ReaderDemo />
      <br />
      <a href="https://github.com/jfrancos/react-resume/blob/master/src/OggmentedContent.js">
        Source for this page
      </a>
    </>
  );
};

const useDecodeAudioData = (filename, audioContext) => {
  const [audioBuffer, setAudioBuffer] = useState();
  useEffect(() => {
    fetch(filename)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) =>
        audioContext.decodeAudioData(arrayBuffer, setAudioBuffer)
      );
  }, [filename, audioContext]);

  return audioBuffer;
};

const useReader = (setReaderState) => {
  const [readerBuffer, setReaderBuffer] = useState();
  const { oggmentedContext } = useContext(AudioContextContext);

  const fileSelector = document.createElement("input");
  fileSelector.setAttribute("type", "file");
  fileSelector.setAttribute("accept", ".ogg");
  const handleFiles = ({
    target: {
      files: [file],
    },
  }) => {
    setReaderState(loading);
    fileReader.readAsArrayBuffer(file);
  };
  fileSelector.addEventListener("change", handleFiles, false);

  const fileReader = new FileReader();
  fileReader.onload = async ({ target: { result } }) => {
    oggmentedContext.decodeAudioData(result, (buffer) => {
      setReaderBuffer(buffer);
      setReaderState(ready);
    });
  };
  return { fileSelector, readerBuffer };
};

const LoopDemo = () => {
  const { oggmentedContext, nativeContext } = useContext(AudioContextContext);
  const [runningBuffer, setRunningBuffer] = useState(null);
  const nativeTriangleBuffer = useDecodeAudioData(
    "/triangle.ogg",
    nativeContext
  );
  const oggmentedTriangleBuffer = useDecodeAudioData(
    "/triangle.ogg",
    oggmentedContext
  );

  const togglePlayer = (buffer) => () => {
    nativeContext.resume();
    oggmentedContext.resume();
    setRunningBuffer(runningBuffer === buffer ? null : buffer);
  };

  useEffect(() => {
    if (nativeTriangleBuffer) {
      console.log(
        "native AudioContext:",
        nativeTriangleBuffer.getChannelData(0)
      );
    }
  }, [nativeTriangleBuffer]);

  useEffect(() => {
    if (oggmentedTriangleBuffer) {
      console.log(
        "oggmented AudioContext",
        oggmentedTriangleBuffer.getChannelData(0)
      );
    }
  }, [oggmentedTriangleBuffer]);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AudioFileLooper
            audioCtx={nativeContext}
            running={runningBuffer === nativeTriangleBuffer}
            onClick={togglePlayer(nativeTriangleBuffer)}
            buffer={nativeTriangleBuffer}
          />
          <p>Looped using native AudioContext</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AudioFileLooper
            audioCtx={oggmentedContext}
            running={runningBuffer === oggmentedTriangleBuffer}
            onClick={togglePlayer(oggmentedTriangleBuffer)}
            buffer={oggmentedTriangleBuffer}
          />
          <p>Looped using OggmentedAudioContext</p>
        </div>
      </div>
      <br />
      <p>
        If you look in your browser’s JavaScript console, you’ll see the
        Float32Arrays for both buffers. The Oggmented AudioContext’s buffer has
        33075 samples, which is a reasonable number of samples to see for 0.75s
        of 44100 Hz audio. The native AudioContext however, has{" "}
        {nativeTriangleBuffer && nativeTriangleBuffer.length} samples.
      </p>
    </>
  );
};

const ReaderDemo = () => {
  const { oggmentedContext } = useContext(AudioContextContext);
  const [readerState, setReaderState] = useState(select);
  const source = useRef();
  const { fileSelector, readerBuffer } = useReader(setReaderState);
  const startBuffer = () => {
    const bufferSource = oggmentedContext.createBufferSource();
    bufferSource.connect(oggmentedContext.destination);
    bufferSource.buffer = readerBuffer;
    bufferSource.onended = () => {
      setReaderState(select);
    };
    bufferSource.start();
    source.current = bufferSource;
  };
  const handleReaderClick = () => {
    if (readerState === select) {
      fileSelector.click();
      return;
    }
    if (readerState === ready) {
      startBuffer();
      setReaderState(playing);
      return;
    }
    if (readerState === playing) {
      source.current.stop();
      setReaderState(select);
      return;
    }
  };
  return (
    <>
      <br />
      <hr />
      <br />
      <p>
        <a href="https://github.com/jfrancos/oggmented">
          Oggmented AudioContext
        </a>{" "}
        is a library that decodes vorbis using its own JavaScript and Wasm,
        transpiled from Xiph’s libvorbis C libraries, rather than using the
        browser’s built in audio decoding support.
      </p>

      <button
        className="button"
        style={{ height: "4rem", margin: "1rem auto" }}
        onClick={handleReaderClick}
      >
        {readerState === select &&
          "Use OggmentedAudioContext to play an Ogg Vorbis file"}
        {readerState === loading && <ClipLoader color="white" />}
        {readerState === ready && (
          <FontAwesomeIcon
            icon={faPlay}
            style={{ padding: "0 1rem", fontSize: "1.5rem" }}
          />
        )}
        {readerState === playing && (
          <FontAwesomeIcon
            icon={faStop}
            style={{ padding: "0 1rem", fontSize: "1.5rem" }}
          />
        )}
      </button>
      <p>
        If you don’t happen to have any vorbis files lying around but you’d like
        to try this demonstration, here’s one you can download:{" "}
        <a href="ValsaDoCorpo.ogg">Só Sol – Valsa Do Corpo</a>. (More Só Sol can
        be found at their <a href="https://sosol.bandcamp.com">Bandcamp page</a>
        )
      </p>
    </>
  );
};

export default OggmentedContent;
