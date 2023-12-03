import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PodcastPlayer = ({ audio }) => {
    return (
        <AudioPlayer
            className="h-[200px]"
            src={audio}
            autoPlay={false}
            onPlay={(e) => console.log("onPlay")}
        />
    );
};

export default PodcastPlayer;
