import React from 'react';

export const Player = ({page}) => {
    return (
        <div className="play-area">
            <iframe
                title="player"
                src={`https://reflexserver.site/public/${page}/embed`}
                frameBorder="0"
                style={{width: '100%', minHeight: '150px', border: 0}}
            />
        </div>
    );
};


