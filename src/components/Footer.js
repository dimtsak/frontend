import React from 'react';


export default function Footer() {
    return(
      
            <footer className=" text-center text-white">
                
                <div className="container p-4">
                   
                    <section className="mb-4">
                   
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" target="_blank" role="button"><i className="fab fa-facebook-f"></i></a>
                   
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.twitter.com/" target="_blank" role="button"><i className="fab fa-twitter"></i></a>
                   
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" target="_blank" role="button"><i className="fab fa-google"></i></a>
                
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" target="_blank" role="button"><i className="fab fa-instagram"></i></a>
            
                    </section>
                    <section className="">
                        <form action="">
                 
                            <div className="row d-flex justify-content-center">
                
                            <div className="col-auto">
                                <p className="pt-2">
                                <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                      
                            <div className="col-md-5 col-12">
                            
                                <div className="form-outline form-white mb-4">
                                <input type="email" id="form5Example21" className="form-control" placeholder='Email address'/>
                                <label className="form-label" htmlFor="form5Example21"></label>
                                </div>
                            </div>
                           
                            <div className="col-auto">
                               
                                <button type="submit" className="btn btn-outline-light mb-4">
                                Subscribe
                                </button>
                            </div>
                          
                            </div>
                           
                        </form>
                    </section>
                    <section>
                    <div className="text-center p-3" >
                        © 2022 Copyright:
                        <a className="text-white" href="#">&nbsp; Quantum Quack Molly</a>
                    </div>
                    </section>
                </div>
            </footer>
      
    );
}