import React from 'react';
import {SubTitle} from 'components';

import "./History.min.css";
import HistoryItem from 'components/HistoryItem/HistoryItem';

function History({activeCard, activeCurrency}) {
    return (
      <div className="history">
        <SubTitle>History</SubTitle>
        <div className="history__list">
          {activeCard.transaction_history &&
            activeCard.transaction_history.map((item, index) => (
              <HistoryItem activeCurrency={activeCurrency} info={item} />
            ))}
        </div>
      </div>
    );
}

export default History;
