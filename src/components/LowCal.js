import axios from 'axios';
import React from 'react';
// import './App.css';
// import Header from "./components/Header";
import Product from "./Product";


 
function LowCal() {
  const [cal, setCal] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/lowcal/").then((response) => {
      setCal(response.data);
    });
  }, []);

  if (!cal) {return null} else {
    const lowcalprods = cal.map(item => {
      return (
        <Product 
        id = {item.id}
        name = {item.commercial_name}
        price = {item.price}
        proteins = {item.proteins}
        calories = {item.calories}
        diabetic = {item.is_diab}
        image = {item.image}
        rating = {item.rating}
        />
      )
    });



    return(
      <>
      
        {lowcalprods}
       
     </>
    );
}}

export default LowCal;