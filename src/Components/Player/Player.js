import React from 'react';

export const Player = ({page}) => {
    return (
        <div className="play-area">
            <iframe
                title="player"
                src={`http://134.122.77.32/public/${page}/embed`}
                frameBorder="0"
                style={{width: '100%', minHeight: '150px', border: 0}}
            />
        </div>
    );
};


