import useOfficialTrailer from "../Hooks/useofficialTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieID }) => {
const Trailer = useSelector((store) => store.movies?.OfficialTrailer)

useOfficialTrailer(movieID);

  return (
    <div className="w-[99vw]">
      <iframe
        className="w-[99vw] h-[100vh]"
        src={"https://www.youtube.com/embed/"+Trailer?.key +"?si=hWzDU3fNshM4pOn9&autoplay=1&mute=1&loop=1&autopause=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
