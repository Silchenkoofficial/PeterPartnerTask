import React from "react";
import { SubTitle } from "components";

import "./History.min.css";
import HistoryItem from "components/HistoryItem/HistoryItem";

function History({ activeCard, activeCurrency }) {
  return (
    <div className="history loading">
      <SubTitle>History</SubTitle>
      <div className="history__list">
        <div className="history__item">
          <div className="history__item--icon">
              <div className="img"></div>
          </div>
          <div className="history__item--title">
            <p></p>
            <div className="history__item--date"></div>
          </div>
          <div className="history__item--amount">
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
