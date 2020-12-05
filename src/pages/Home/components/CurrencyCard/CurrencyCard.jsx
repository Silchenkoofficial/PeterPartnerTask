import React from 'react';
import cx from 'classnames';

import './CurrencyCard.min.css';

function CurrencyCard({symbol, text, className, onClick}) {

    return (
        <div className={cx('currencyCard', className)} onClick={onClick}>
            <div className="currencyCard__symbol">{symbol}</div>
            <div className="currencyCard__text">{text}</div>
        </div>
    )
}

export default CurrencyCard;
