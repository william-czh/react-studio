import "./App.css";
import BakeryItem from "./components/BakeryItem.js"
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import Grid from '@mui/material/Unstable_Grid2'
import {Typography} from "@mui/material"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  const [cart, setCart] = useState({})
  /* add your cart state code here */
  function handleClick(item) {
    var number = 1
    if (item.name in cart) {
      number = cart[item.name].quantity + 1
    }
    setCart({...cart, [item.name]: {quantity: number, price: item.price}})
  }

  return (
    <Grid container spacing={6} sx={{px: 15, py: 2}}>
      <Grid xs={8} spacing={12}>
        <h1>Will's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <Grid container spacing={4}>
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <Grid key={index} xs={4}>
              <BakeryItem 
                item={item}
                handleClick={handleClick}
              />
            </Grid> 
          ))}
        </Grid>
      </Grid>
      <Grid xs>
        <h2>My Cart</h2>
        {Object.keys(cart).map((itemName) => (
          <Typography mt={2} key={itemName}>
            {cart[itemName].quantity} x {itemName}
          </Typography>
        ))} {/* TODO: render a list of items in the cart */}
          {Object.keys(cart).length === 0 ? (
            <Typography fontStyle='italic'>Your cart is currently empty! <br></br> <br></br>  Add your choices by clicking the '+' button</Typography>
          ) : (
            <Typography mt={2} variant="h6">
              Total: ${Object.keys(cart).reduce(
                (previousTotal, itemName) => (
                  previousTotal + (cart[itemName].quantity * cart[itemName].price)
                ), 0
              )}
            </Typography>
          )}
      </Grid>
    </Grid>
  );
}

export default App;