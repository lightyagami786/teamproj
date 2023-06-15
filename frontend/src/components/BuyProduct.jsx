import React, { useEffect, useState } from 'react'
import BuyProComp from './BuyProComp';
import './cssfiles/Products.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const BuyProduct = () => {
    const getproducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setPro(result);
        console.log('dfd',pro)
      };
    useEffect(()=>{
        getproducts();
        console.log('dfd',pro)
    },[])
  

    const[pro,setPro]=useState([]);

    return (
    <div>
        <h1>buypro</h1>
        <Link to='/cartpage' ><Button variant="contained"> <ShoppingCartIcon /></Button></Link>
       
        <div className='mycardo' >
        {pro.map((item, ind) => (
        <span key={ind}  >
          
          <BuyProComp name={item.name} desc={item.desc} price={item.price} />
        </span>
      ))}
      </div>
    </div>
  )
}

export default BuyProduct
