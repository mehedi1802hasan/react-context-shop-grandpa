import React from 'react';
import './Tshirt.css';
const Tshirt = ({tshirt,handleAddToCard}) => {
    const {name,_id,price,picture}=tshirt
   // console.log(tshirt)
    return (
        <div className='tshirt'>
            <img src={picture} ></img>
            <h3>{name}</h3>
            <i>id: {_id}</i>
            <h4>Price: {price}</h4>
            <button onClick={()=> handleAddToCard(tshirt)} style={{backgroundColor:"red",marginBottom:'20px'}}>Buy Now</button>
 
            
        
        </div>
    );
};

export default Tshirt;