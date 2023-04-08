import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = ({ring,children,hasFriend}) => {
    
    return (
        <div>
            <h3>Cousinn</h3>
           
            <p><small>{children}</small></p>
           { hasFriend && <Friend  ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;