import axios from 'axios';
import React from 'react';
// import './App.css';
// import Header from "./components/Header";
import Product from "./Product";
import { useParams } from "react-router-dom";



 
function SingleProduct(props) {
//     const [id, setId] = React.useState(null);
//     const { productid } = useParams();

//   React.useEffect(() => {
//     fetch(`http://localhost:8000/api/products/:id`)
//     .then((res) => res.json())
//     .then((data) => setId(data));
//   }, [productid]);

//   if (!id) {return null} else {

//       return (
//         <Product 
//         />
//       )
//     };
//     let params = useParams();
//     return (
//         <div>
//               <div className="product col-sm-3">
//                     <div className="card ">
//                     <div className="card-body ">
//                         <img className="card-img-top" src={params.image} alt="product image"/>
//                         <h5 className="card-title">{params.name}</h5>
//                         <p className="card-text">Price: {params.price} &euro;</p>
//                         <p className="card-text">- Learn  -</p>
//                         <p className="card-text">Proteins: {params.proteins} /100g/ml</p>
//                         <p className="card-text">Calories: {params.calories} /100g/ml</p>
//                         <a href="#" className="btn btn-primary">Add to cart</a>
//                     </div>
                   
//                     </div>
//                 </div>
//         </div>
//     )
const [cal, setCal] = React.useState(null);

React.useEffect(() => {
  axios.get("http://localhost:8000/api/products/`${id}`").then((response) => {
    setCal(response.data);
  });
}, []);

if (!cal) {return null} else {
  const singleproduct = cal.map(item => {
    return (
      <Product 
      id = {item.id}
      name = {item.commercial_name}
      price = {item.price}
      proteins = {item.proteins}
      calories = {item.calories}
      diabetic = {item.is_diab}
      image = {item.image}
      />
    )
  });



  return(
    <>
      {singleproduct}
     
   </>
  );
}
}
  
export default SingleProduct;

