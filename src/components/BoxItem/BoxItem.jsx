import React from 'react'

function BoxItem({symbol, text, className, onClick}) {
    return (
        <div className={`box__item ${className}`} onClick={onClick}>
            <div className="symbol">{symbol}</div>
            <div className="text">{text}</div>
        </div>
    )
}

export default BoxItem
