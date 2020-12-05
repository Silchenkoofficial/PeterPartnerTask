import React from 'react';

import {Valute} from 'components';

import "./HistoryItem.min.css";

function HistoryItem({info, activeCurrency}) {
    return (
      <div className="history__item">
        <div className="history__item--icon">
          <img src={info.icon_url} alt="" />
        </div>
        <div className="history__item--title">
          <p>{info.title}</p>
          <div className="history__item--date">{info.date}</div>
        </div>
        <div className="history__item--amount">
          <p>{activeCurrency === "GBP" && "- £"}</p>
          <p>{activeCurrency === "EUR" && "- €"}</p>
          <p>{activeCurrency === "RUB" && "- ₽"}</p>
          <Valute balance={info.amount} currency={activeCurrency} />
        </div>
      </div>
    );
}

export default HistoryItem;
