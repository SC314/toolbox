import {
  Stack,
} from "@mui/joy";
import {
  React, useEffect, useRef, useState,
} from "react";
import SongInfo from "@components/paths/homepage/SongInfo";
import MusicCotrolls from "@components/paths/homepage/MusicControlls";
import TimeSlider from "@components/paths/homepage/TimeSlider";
import VolumeSlider from "@components/paths/homepage/VolumeSlider";
import LoopSlider from "@components/paths/homepage/LoopSlider";
import PlaylistOptions from "@components/paths/homepage/PlaylistOptions";
import ReactPlayer from "react-player";

export default function Login() {
  const [videoUrl, setVideoUrl] = useState("");
  const [inputUrl, setInputUrl] = useState(["https://www.youtube.com/watch?v=lEeh5Mzxwe4"]);
  // eslint-disable-next-line no-unused-vars
  const [songIndex, setSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.2);
  const [duration, setDuration] = useState(0);
  const [isPause, setIsPause] = useState(true);
  const [loopStart, setLoopStart] = useState(0);
  const [loopEnd, setLoopEnd] = useState(100);
  const playerRef = useRef(null);

  useEffect(() => {
    if (currentTime >= loopEnd && loopEnd > 0) {
      playerRef.current.seekTo(loopStart);
    }
  }, [currentTime, loopStart, loopEnd]);

  useEffect(() => {
    setLoopEnd(duration);
  }, [duration]);

  const handleNext = () => {
    const nextIndex = (songIndex + 1) % inputUrl.length;
    setSongIndex(nextIndex);
    setCurrentTime(0);
    setLoopStart(0);
  };

  const handlePrevious = () => {
    const previousIndex = (songIndex - 1 + inputUrl.length) % inputUrl.length;
    setSongIndex(previousIndex);
    setCurrentTime(0);
    setLoopStart(0);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const onSubmit = () => {
    if (inputUrl) {
      setVideoUrl(inputUrl[songIndex]);
    }
  };

  const handlePlayPause = () => {
    onSubmit();
    setIsPause(!isPause);
  };

  const handleSliderChange = (event, newValue) => {
    setCurrentTime(newValue);
    if (playerRef.current) {
      playerRef.current.seekTo(newValue);
    }
  };

  const handleLoopChange = ([newStart, newEnd]) => {
    if (newStart !== loopStart) {
      setLoopStart(newStart);
      playerRef.current.seekTo(newStart);
    } else {
      setLoopEnd(newEnd);
    }
  };

  useEffect(() => {
    onSubmit();
  }, [songIndex]);

  return (
    <Stack
      spacing={1}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "3vh",
        height: "95vh",
        boxShadow: "0px 1px 3px 0px #888888",
        borderRadius: "6px",
        backgroundImage: "linear-gradient(to bottom right, #2c3e50, #34495e)",
        // filter: "blur(5px)",
      }}
    >
      <Stack spacing={2}>
        <SongInfo index={songIndex + 1} songs={inputUrl.length} />
        <MusicCotrolls
          pause={isPause}
          handlePlayPause={handlePlayPause}
          handleNextSong={handleNext}
          handlePreviousSong={handlePrevious}
        />
        <Stack width="30vh">
          <TimeSlider
            currentTime={currentTime}
            duration={duration}
            ref={playerRef}
            handleSliderChange={handleSliderChange}
          />
          <VolumeSlider
            volume={volume}
            handleVolumeChange={handleVolumeChange}
          />
          <LoopSlider
            loopStart={loopStart}
            loopEnd={loopEnd}
            duration={duration}
            handleLoopChange={handleLoopChange}
          />
        </Stack>
        <PlaylistOptions
          addSong={setInputUrl}
        />
      </Stack>
      {videoUrl && (
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        volume={volume}
        playing={!isPause}
        progressInterval={10}
        width="0"
        height="0"
        style={{
          display: "none",
        }}
        config={{
          youtube: {
            playerVars: { showinfo: 0, controls: 0, modestbranding: 1 },
          },
        }}
        onProgress={({ playedSeconds }) => setCurrentTime(playedSeconds)}
        onDuration={(videoDuration) => setDuration(videoDuration)}
      />
      )}
    </Stack>
  );
}
