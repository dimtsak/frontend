import React from 'react';


export default function Header(props) {
    return(
        <header className='container'>
            {/* <div>
            <h4 className='flex'>Quantum Quack Molly</h4>
            <img className="card-img quack" src="images/quack.jpg" alt="Card image cap"/>
            </div> */}
            <nav>
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" >All Products {props.name}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Low-Calories-Products" className="nav-link ">Low-Calories Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Low-SugarProducts" className="nav-link " href="#">Low-Sugar Products</Link>
                    </li>
                    </ul>
                </div>
                {/* <div className="card-body">
                
                </div> */}
            </div>
            </nav>
        </header>
    );
}

// <nav>
//             <div className="card text-center">
//                 <div className="card-header">
//                     <ul className="nav nav-tabs card-header-tabs">
//                     <li className="nav-item">
//                         <Link to="/" className="nav-link active" >All Products </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/Low-Calories-Products" className="nav-link ">Low-Calories Products</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/Low-SugarProducts" className="nav-link " href="#">Low-Sugar Products</Link>
//                     </li>
//                     </ul>
//                 </div>
//                 {/* <div className="card-body">
                
//                 </div> */}
//             </div>
//             </nav>