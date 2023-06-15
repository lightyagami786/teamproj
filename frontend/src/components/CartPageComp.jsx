import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CartPageComp({name,desc,price,totpp,setTotpp}) {
    console.log('price is ',price);
    const handleUp=()=>{
      console.log('uplink');
      let a=totpp+parseInt(price);
      setTotpp(a);
      setTqty(tqty+1);
    }
    const handleDown=()=>{
      console.log('downlink');
      let a=totpp-parseInt(price);
      setTotpp(a);
      setTqty(tqty-1);
    }
    const[tqty,setTqty]=React.useState(1);
  return (
    <Card sx={{ maxWidth: 270 }}>
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
         {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{handleUp()}} >+</Button>
        <span>{tqty}</span>
        <Button size="small" onClick={()=>{handleDown()}} >-</Button>
      </CardActions>
    </Card>
  );
}