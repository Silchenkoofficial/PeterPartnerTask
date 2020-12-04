import React from 'react';

import {Link} from 'react-router-dom';
import { Header, UserCard, LoadingUserCard } from "components";

import './Home.min.css';

function Home({activeCard, isLoading}) {
    return (
      <div className="home">
        <Header>Главная</Header>
        <Link to="/my-cards">
          {!isLoading ? <UserCard cardInfo={activeCard} /> : <LoadingUserCard />}
        </Link>
      </div>
    );
}

export default Home;