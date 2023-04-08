import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import Card from '../Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
    const tshirts=useLoaderData();
  //  console.log(tshirts)
  const [card,setCard]=useState([]);
  const handleAddToCard=tshirt=>{
     const exists=card.find(ts=>ts._id=== tshirt._id);
     if(exists){
        toast("Already added!");
     }
     else{
        const newCard= [...card, tshirt];
        setCard(newCard)
     }

  }
  const handleRemoveTOCard=id=>{
    const remaining=card.filter(ts=> ts._id!==id);
    setCard(remaining);
  }

    return (
        <div className='home-container'>
        
        <div className='tshirt-container'>
        {
            tshirts.map(tshirt=><Tshirt
                key={tshirt.index}
                tshirt={tshirt}
                handleAddToCard={handleAddToCard}
                ></Tshirt>
            )
        }
        <ToastContainer />
        </div>
        <div className='order-summary'>
         <Card
         card={card}
        handleRemoveTOCard={handleRemoveTOCard}
    ></Card>
        </div>
        </div>
    );
};

export default Home;