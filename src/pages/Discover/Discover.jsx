import React from "react";
import "./Discover.scss";
import { genres } from "../../assets/constants";
import useFetch from "../../hooks/useFetch";
import SongCard from "../../components/SongCard/SongCard";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import MusicPlayer from '../../components/MusicPlayer/index'


const Discover = () => {
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/charts/track`);

  const genreTitle = "Pop";
  return (
    <div className="discover">
      <div className="discover-header">
        <h1>Discover</h1>
        <select onChange={() => {}} value="">
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="discover-body">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Discover;
