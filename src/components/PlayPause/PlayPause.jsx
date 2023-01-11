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
  return isPlaying && activeSong?.title ? (
    <div className="icon-wrapper">
    <Pause className="player-icon" onClick={handlePlay} />
    </div>

  ) : (
      <div className="icon-wrapper">
    <PlayArrow className="player-icon" onClick={handlePause} />
      </div>

  );
};

export default PlayPause;
