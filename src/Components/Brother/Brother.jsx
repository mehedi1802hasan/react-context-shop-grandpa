import React, { useContext, useState } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const angts=useContext(RingContext)
    return (
        <div>
            <h3>Brother</h3>
          <h3>hii</h3>
       <p>{angts}</p>
        </div>
    );
};

export default Brother;