import React, {useState} from 'react';

import './Card.min.css';
import UserIcon from 'icons/UserIcon';
import CardType from 'components/CardType/CardType';

function Card({ cardInfo, activeCurrency, activeCurrencyData }) {

    const getCurrentCurrency = (balance = 0, dollar) => {

        return balance;
    }

    return (
        <div className="user-card">
            <div className="user-card__section">
                <CardType type={cardInfo.type} />
                <div className="user-card__number">
                    {cardInfo.card_number}
                </div>
            </div>
            <div className="user-card__section">
                <div className="user-card__name">
                    <UserIcon /> <p>{cardInfo.cardholder_name}</p>
                </div>
                <div className="user-card__valid-thru">
                    <p className="text">VALID THRU</p>
                    <p className="value">{cardInfo.valid}</p>
                </div>
            </div>
            <div className="user-card__section">
                <div className="user-card__currency">
                    <p>{activeCurrency === 'GBP' && '£'}</p>
                    <p>{activeCurrency === 'EUR' && '€'}</p>
                    <p>{activeCurrency === 'RUB' && '₽'}</p>
                    <p>{getCurrentCurrency()}</p>
                </div>
                <div className="user-card__balance">
                    <p className="text">Your balance</p>
                    <p className="value">${cardInfo.balance}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
