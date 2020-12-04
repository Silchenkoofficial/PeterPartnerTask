import React from 'react';

import './Fixed.min.css';

function Fixed({children}) {
    return (
      <div className="fixed">
        <div className="fixed__in">{children}</div>
      </div>
    );
}

export default Fixed
