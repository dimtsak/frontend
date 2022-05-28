import React from 'react';
import Rating from "./Rating";
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';



export default function Product(props) {
    
    if (props.diabetic) {
        return (
        
        <div className="product col-sm-3">
            
            <Link to={`/${props.id}`}  target="_blank">
                    <div className="card ">
                    <div className="card-body ">
                        <img className="card-img-top" src={props.image} alt="product image"/>
                        <h5 className="card-title">{props.name}<span >&nbsp;<a href="#" className='green' title="This product is suitable for diabetics" data-toggle="popover" data-trigger="focus">&#9678;</a> </span></h5>
                        
                        <p className="card-text">Price: {props.price} &euro;</p>
                        <p className="card-text">- Learn More -</p>
                        <p className="card-text">Ratings: <Rating value ={props.rating}  color ={'#D4AF37'}/></p>
                        <p className="card-text">Proteins: {props.proteins} /100g/ml</p>
                        <p className="card-text">Calories: {props.calories} /100g/ml</p>
                        <a href="#" className="btn btn-dark">Add to cart</a>
                        
                    
                
                    </div>
                   
                    </div>
                    </Link>
                   
                </div> 
              
              
              )
            }
            return(
                
                
                <div className="product col-sm-3">
                    <Link to={`/${props.id}`}  target="_blank">
                    <div className="card ">
                    <div className="card-body ">
                        <img className="card-img-top" src={props.image} alt="product image"/>
                        <h5 className="card-title">{props.name}</h5>

                        <p className="card-text">Price: {props.price} &euro;</p>
                        <p className="card-text">- Learn More -</p>
                        <p className="card-text">Ratings: <Rating value ={props.rating}  color ={'#D4AF37'}/></p>
                        <p className="card-text">Proteins: {props.proteins} /100g/ml</p>
                        <p className="card-text">Calories: {props.calories} /100g/ml</p>
                        <a href="#" className="btn btn-dark">Add to cart</a>
                    </div>
                   
                    </div>
                    </Link>
                </div>
                
          
        
    );
}