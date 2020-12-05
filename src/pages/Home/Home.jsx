import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import {Link} from 'react-router-dom';
import { Header, UserCard, LoadingUserCard, SubTitle, Box, BoxItem } from "components";
import History from './components/History/History';
import HistoryLoading from './components/History/HistoryLoading';

import './Home.min.css';

function Home({activeCard, isLoading}) {
    const [activeCurrency, setActiveCurrency] = useState('GBP');

    const changeCurrency = valute => {
      setActiveCurrency(valute);
    }

    useEffect(() => {

    }, [activeCard]);

    return (
      <div className="home">
        <Header>Главная</Header>
        <Link to="/my-cards">
          {!isLoading ? (
            <UserCard
              activeCurrency={activeCurrency}
              cardInfo={activeCard}
              changeCurrency={(valute = "GBP") => setActiveCurrency(valute)}
            />
          ) : (
            <LoadingUserCard />
          )}
        </Link>
        <SubTitle>Change currency</SubTitle>
        <Box>
          <BoxItem
            className={activeCurrency === "GBP" && "active"}
            symbol="£"
            text="GBP"
            onClick={() => changeCurrency("GBP")}
          />
          <BoxItem
            className={activeCurrency === "EUR" && "active"}
            symbol="€"
            text="EUR"
            onClick={() => changeCurrency('EUR')}
          />
          <BoxItem
            className={activeCurrency === "RUB" && "active"}
            symbol="₽"
            text="RUB"
            onClick={() => changeCurrency('RUB')}
          />
        </Box>
        {
          !isLoading ? <History activeCurrency={activeCurrency} activeCard={activeCard} /> : <HistoryLoading />
        }
      </div>
    );
}

export default Home;