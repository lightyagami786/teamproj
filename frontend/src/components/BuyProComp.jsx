import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { changeVal } from '../redux/actions';
import { delVal } from '../redux/actions';
export default function BuyProComp({name,desc,price}) {
    const dispatch=useDispatch();
    const myState=useSelector((state)=>state.changeTheValue);
    
    // const changeTheValue=(e)=>{
    //     dispatch(changeVal(e))
    // }
    const[qty,setQty]=React.useState(0);
    const handle2=(e)=>{
        dispatch(changeVal(e));
    }

    const checkBtn=()=>{
      for(var i=0;i<myState.length;i++){
          if(myState[i].name===name){
            setBtn(false);
            break;
          }
      }
    }


    React.useEffect(()=>{
      checkBtn();
    },[])

    

    const handle=()=>{
      const e={name,desc,price}
      if(btn==false){
        setBtn(true);
        dispatch(delVal(e));
        
      }else{
          setQty(qty+1);

        
        setBtn(false)
        handle2(e);
      }
    }
    const[btn,setBtn]=React.useState(true);
    return (
    < >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.ytimg.com/vi/PuNHVEmMZnM/maxresdefault.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handle()}  >{btn?<span>add to cart</span>:<span>remove from cart</span>}</Button>
        
      </CardActions>
    </Card>
    </>
  );
}