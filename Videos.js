import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './Player.css';

function Videos() {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player' 
            url='https://www.youtube.com/watch?v=C_ggzSqjHjY&t=2s'
            controls
            width='100%'
            height='100%'
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }
            }}
            />
        </div>
    )
}

export default Videos;