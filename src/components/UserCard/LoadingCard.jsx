import React from 'react';

import {CardType} from 'components';
import {UserIcon} from 'icons';

import './Card.min.css';

function LoadingCard() {
    return (
      <div className="user-card loading">
        <div className="user-card__section">
          <CardType type='mastercard' />
        </div>
        <div className="user-card__section">
          <div className="user-card__name">
            <UserIcon />
          </div>
          <div className="user-card__valid-thru">
            <p className="text">VALID THRU</p>
          </div>
        </div>
        <div className="user-card__section">
          <div className="user-card__currency">
          </div>
          <div className="user-card__balance">
            <p className="text">Your balance</p>
          </div>
        </div>
      </div>
    );
}

export default LoadingCard;
