import React from 'react';

import './SubTitle.min.css';

function Subtitle({children}) {
    return (
        <div className="subtitle">
            <div className="subtitle__text">{children}</div>
        </div>
    )
}

export default Subtitle;
