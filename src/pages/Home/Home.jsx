import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import {Link} from 'react-router-dom';
import { Header, UserCard, LoadingUserCard, SubTitle } from "components";
import Currency from './components/Currency/Currency';

import './Home.min.css';

function Home({activeCard, isLoading}) {
    const [activeCurrency, setActiveCurrency] = useState('GBP');
    const [currencyData, setCurrencyData] = useState({});
    const [activeCurrencyData, setActiveCurrencyData] = useState({});
    
    const getCurrency = async () => {
      await Axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(res => setCurrencyData(res.data.Valute)).catch(err => console.log(err));
    }

    useEffect(() => {
      getCurrency();
      setActiveCurrencyData(currencyData[activeCurrency]);
    }, []);

    return (
      <div className="home">
        <Header>Главная</Header>
        <Link to="/my-cards">
          {!isLoading ? <UserCard
            activeCurrencyData={activeCurrencyData}
            activeCurrency={activeCurrency}
            cardInfo={activeCard}
          /> : <LoadingUserCard />}
        </Link>
        <SubTitle>Change currency</SubTitle>
        <Currency />
      </div>
    );
}

export default Home;