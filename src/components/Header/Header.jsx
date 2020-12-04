import React from 'react';

import './Header.min.css';
import { Fixed } from '..';

function Header({children, left, right}) {
    return (
      <Fixed>
        <div className="header">
          <div className="header__left">{left}</div>
          <div className="header__content">{children}</div>
          <div className="header__right">{right}</div>
        </div>
      </Fixed>
    );
}

export default Header;
