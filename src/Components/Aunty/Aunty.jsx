import React from 'react';
import Cousin from '../Cousin/Cousin';
import Friend from '../Friend/Friend';

const Aunty = ({ring}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
            <Cousin>Ala</Cousin>
            <Cousin>shab</Cousin>
            <Cousin hasFriend={true}  ring={ring} >ruk </Cousin>
            </section>
        </div>
    );
};

export default Aunty;