import axios from 'axios';
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Product from "./components/Product";
import LowCal from "./components/LowCal";
import LowSug from "./components/LowSugar";
import HighProt from "./components/HighProtein";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import SliderPrice from "./components/SliderPrice";
import SingleProduct from './components/SingleProduct';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';



const baseURL = "http://localhost:8000/api/products/"
// const { location } = props;
function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) {return null} else {
    const products = post.map(item => {
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
        number_of_reviews = {item.number_of_reviews}
        />
      )
    })

  
    
  return (
    
    <div className="App">
   
      
        <BrowserRouter>
       

            <header>
            <Navbar className='navcss' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >&nbsp;&nbsp;<i class="fa-solid fa-house"></i></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                
                  <Nav activeKey={location.pathname} className="mr-auto">
                      <Nav.Link href="/">All Products</Nav.Link>
                      {/* <Nav.Link href="/low-calories-products">Low-Calories Products</Nav.Link>
                      <Nav.Link href="/low-sugar-products">Low-Sugar Products</Nav.Link>
                      <Nav.Link href="/high-protein">High-Protein Products</Nav.Link>
                       */}
                  
                  <NavDropdown title="Categories" className='' id="basic-nav-dropdown"  >
                 
                    <NavDropdown.Item className='nav-item grey' href="/low-calories-products">Low-Calories Products</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item className='nav-item grey' href="/low-sugar-products">Low-Sugar Products</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item className='nav-item grey' href="/high-protein">High-Protein Products</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown></Nav>
                <Nav activeKey={location.pathname}>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </header>
 

        <Routes>
          <Route exact path='/' element={<><div className='row grid-container'>{products}</div><Footer /></>} />
          <Route exact path='/low-calories-products' element={<><div className='row grid-container'><LowCal/></div><Footer /></>} />
          <Route exact path='/low-sugar-products' element={<><div className='row grid-container'><LowSug/></div><Footer /></>} />
          <Route exact path='/high-protein' element={<><div className='row grid-container'><HighProt/></div><Footer /></>} />
          <Route path="/:id" element={<><div className='row grid-container'><SingleProduct /></div></>} />
        </Routes>
        </BrowserRouter>

        
     
    </div>
  );
}}

export default App;
