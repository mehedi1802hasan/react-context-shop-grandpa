import React, { useContext } from 'react';
import "./Sister.css"
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const ring=useContext(RingContext)
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h3>sister</h3>
            <p>{ring}</p>
            <i>MONEY: {money}</i>
            <button className='btnC' onClick={()=>setMoney(money+1)}>incrice 1+ money</button>
        </div>
    );
};

export default Sister;