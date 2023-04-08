import React from 'react';
import "./Card.css"
const Card = ({card,handleRemoveTOCard}) => {
    let message;
    if(card.length===0){
        message=<h5>Please add some product </h5>
    }
    else{
     
         message=  <div> <b>Boroloxxxx.</b> <br />
         <span >Thanks for wasting your money!!</span> <br />
     </div>
    }
    return (
        <div>
        <h2 className={card.length==1  ? 'red':'teal'}>Order summary:{card.length}</h2>
        <p className={`bold border ${card.length===3?'yellow':'pink'}`}>Something</p>
        {message}
        {card.length>2 
        ? 
        <span className='yellow'>Aaro o kino </span>
        : 
        <span>Fokira</span>}
       
        {
            card.map(tshirt=> <p  key={tshirt._id}>
                {tshirt.name} 
                <button onClick={()=>handleRemoveTOCard(tshirt._id)}>
                    X
                </button></p>)
        }
        </div>
    );
};

export default Card;