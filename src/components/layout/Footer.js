import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../stylesheets/layout.css";




const Footer = () => {
    return (
        <>
            <div className="footer card-footer">
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>

                                <li><NavLink exact to="/about">about us</NavLink></li>
                                <li><NavLink exact to="/services">our services</NavLink></li>
                                <li><Link to="/">privacy policy</Link></li>
                                <li><NavLink to="/contact">contact us</NavLink></li>

                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">shipping</Link></li>
                                <li><Link to="#">returns</Link></li>
                                <li><Link to="#">order status</Link></li>
                                <li><Link to="#">payment options</Link></li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className="footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li><Link to="#">watch</Link></li>
                                <li><Link to="#">bag</Link></li>
                                <li><Link to="#">shoes</Link></li>
                                <li><Link to="#">dress</Link></li>
                            </ul>
                        </div>
                        {/* Column4 */}
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr style={{ color: "#ffffff" }} />
                    {/* <div className="col-sm">
            <p>

              &copy;{new Date().getFullYear()} Lokinder007 | All rights reserved
              | Terms Of Service | Privacy

            </p>
          </div> */}
                    <div className='col-sm'>
                        Copyright &copy; {new Date().getFullYear()} ReactApp |

                        {""} All Rights Reserved | Powered By {""}
                        <a
                            href="https://lokinder007.github.io/portfolio2/" target="_blank" rel="noopener noreferrer"
                            style={{ cursor: "pointer" }} title="Visit The Site"
                        >
                            Lokinder007
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;
