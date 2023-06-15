import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartPageComp from './CartPageComp';

const CartPage = () => {
 
    const[data,setData]=useState([]);
    
    const myState=useSelector((state)=>state.changeTheValue);
    let totp=0;
    const first=()=>{
      setData(myState);
      for(let i=0;i<data.length;i++){
        totp=totp+parseInt(data[i].price);
      }
      setTotpp(totp);
      console.log(myState);

    }
    useEffect(()=>{
        first();
          },[])
    
    // console.log(data);
const[totpp,setTotpp]=useState(0);
  return (
    <div>
    <div>
     {data.map((item, ind) => (
        <span key={ind}  >
          {<CartPageComp name={item.name} desc={item.desc} price={item.price} setTotpp={setTotpp} totpp={totpp} />}
        </span>
      ))}
    </div>
    <div>
    <span>total</span>
    <span>{totpp}</span>
    </div>
    </div>
  )
}

export default CartPage
