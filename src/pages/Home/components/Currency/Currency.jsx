import React, {useState} from 'react';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import cx from 'classnames';

import './Currency.min.css';

function Currency() {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className="currency">
            <CurrencyCard symbol="£" text="GBR" className={
                cx({
                    active: activeCard === 0 ? 'active' : ''
                })
            }
            onClick={() => setActiveCard(0)} />
            <CurrencyCard symbol="€" text="EUR" className={
                cx({
                    active: activeCard === 1 ? 'active' : ''
                })
            }
            onClick={() => setActiveCard(1)} />
            <CurrencyCard symbol="₽" text="RUB" className={
                cx({
                    active: activeCard === 2 ? 'active' : ''
                })
            }
            onClick={() => setActiveCard(2)} />
        </div>
    )
}

export default Currency;
