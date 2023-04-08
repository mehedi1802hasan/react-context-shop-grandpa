import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
            <Cousin>jarif</Cousin>
            <Cousin>Jihan</Cousin>
            </section>
           
        </div>
    );
};

export default Uncle;