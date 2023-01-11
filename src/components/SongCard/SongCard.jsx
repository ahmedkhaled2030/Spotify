import React from "react";
import { Link } from "react-router-dom";
import PlayPause from "../PlayPause/PlayPause";
import "./SongCard.scss";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const handlePlay = () => {};
  const handlePause = () => {};

  return (
    <div className="song-card">
      <div className="song">
        <div className="song-img">
          <img
            alt="song-img"
            src={
              song?.images?.coverart ||
              "https://play-lh.googleusercontent.com/dwyqtk9CgAaoXUcYB8pUHXRErF5A2Shd0UrZdBLkpAFx_e630aZahwN31HRZWNksIQ"
            }
          />
        </div>
        <div className="song-desc">
          <p>
            <Link className="link" to={`/songs/${song?.key}`}>
              {song.title}
            </Link>
          </p>
          <span>
            <Link
              className="link"
              to={
                song.artists
                  ? `/artists/${song?.artists[0]?.adamid}`
                  : "/top-artists"
              }
            >
              {song?.subtitle}
            </Link>
          </span>
        </div>
      </div>
      <div className="PlayPause">
        <PlayPause
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePause={handlePause}
          handlePlay={handlePlay}
        />
      </div>
    </div>
  );
};

export default SongCard;
