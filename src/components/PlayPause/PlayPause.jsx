import { Pause, PauseCircle, PauseCircleFilled, PauseCircleOutline, PlayArrow, PlayCircle, PlayCircleFilled, PlayCircleOutline } from "@mui/icons-material";
import React from "react";
import "./PlayPause.scss";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  return isPlaying && activeSong?.title === song.title ? (
    <div className="icon-wrapper">
    <Pause className="player-icon" onClick={handlePause} />
    </div>

  ) : (
      <div className="icon-wrapper">
    <PlayArrow className="player-icon" onClick={handlePlay} />
      </div>

  );
};

export default PlayPause;
