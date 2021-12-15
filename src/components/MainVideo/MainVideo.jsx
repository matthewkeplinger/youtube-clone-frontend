import React from 'react';
import './MainVideo.css';
import CommentForm from '../Comment Form/CommentForm';

const MainVideo = ({ selectedVideo, videoTitle, videoDescription }) => {
    // if(!selectedVideo) return <div>No Video Selected. Please search for a video</div>


    const videoSrc = `https://www.youtube.com/embed/${selectedVideo}`;

    return (
        
        <div className="p-2">
            <iframe id="ytplayer" title = "videoPlayer" type="text/html" width="800" height="450"
                src={videoSrc}
                frameBorder="0">
            </iframe>
            <h2>{videoTitle}</h2>
            <p>{videoDescription}</p>
        </div>
    )
}

export default MainVideo;