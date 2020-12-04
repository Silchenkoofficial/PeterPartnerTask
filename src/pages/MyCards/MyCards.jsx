import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {Header} from 'components';
import {ArrowBack} from 'icons';
import CardList from './components/CardList/CardList';

import './MyCards.min.css';

function MyCards({users, activeCard, changeActiveCard}) {

    return (
        <div className="my-cards">
            <Header left={<Link to="/"><ArrowBack /></Link>}>Мои карты</Header>
            <CardList users={users} activeCard={activeCard} changeActiveCard={changeActiveCard} />
        </div>
    )
}

export default MyCards;
