import React, { Component } from 'react';
import './relatedVideos.css'


const RelatedVideos = (props) => {

    // debugger;
    let videos = props.videos;
    let video_id = '';
    
    const callBackFunction = (video_id, video_title, video_description) =>{
        props.func(video_id, video_title, video_description);
        console.log("callback");
        console.log(video_id);
    }

    return ( 
        
        <div className="p-2">
            <br /> <br />
            {videos.map((video)=>{
                video_id = video.id.videoId
                return(
                    
                    <div >
                        
                        <img src={video.snippet.thumbnails.medium.url } onClick={()=>callBackFunction(video.id.videoId, video.snippet.title, video.snippet.description)} /><br />
                        <h5 className="relatedTitle"><strong>{video.snippet.title}</strong></h5>
                        
                    </div>
                );
            })}
        </div>
     );
}
 
export default RelatedVideos;