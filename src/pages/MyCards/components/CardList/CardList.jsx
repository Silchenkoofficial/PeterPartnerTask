import React from 'react';
import {CardType} from 'components';
import {Link} from 'react-router-dom';

import cx from 'classnames';

import './CardList.min.css';

function CardList({users, activeCard, changeActiveCard}) {
    return (
      <ul className="card-list">
        {users.map((card, index) => (
          <Link
            to="/"
            key={index}
            className={cx("card-list__item", {
              active: card.card_number === activeCard.card_number ? "active" : ""
            })}
            onClick={() => {
              changeActiveCard(card);
            }}
          >
            <CardType type={card.type} /> {card.card_number}
            <div className="badge"></div>
          </Link>
        ))}
      </ul>
    );
}

export default CardList;
