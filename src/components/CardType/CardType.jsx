import React from 'react'
import MasterCardIcon from '../../icons/MasterCardIcon';
import VisaIcon from '../../icons/VisaIcon';
import UnionPayIcon from '../../icons/UnionPayIcon';

function CardType({type}) {
    return (
        <div className="user-card__type">
            {type === 'mastercard' && <MasterCardIcon />}
            {type === 'visa' && <VisaIcon />}
            {type === 'unionpay' && <UnionPayIcon />}
        </div>
    )
}

export default CardType
