import React from 'react';

import './Box.min.css';

function Box({children}) {
    return (
        <div className="box">
            {children}
        </div>
    )
}

export default Box;
