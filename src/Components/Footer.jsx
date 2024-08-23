import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation()
    const scrollToTop = (link) => {
        if (location.pathname === link) {
            window.scrollTo(0, 0)
        }
    }
    return (
        <>
            <div className="footerBg quoteActionMargin">
                <div className="footerBg-overlay">
                    <div className="container">
                        <div className="row pt-4 g-4 justify-content-between">
                            <div className="col-md-4">
                                <h3>About Us</h3>
                                <p>Sultani Elasto Products (Pvt) Ltd is the largest manufacture of covered yarn in pakistan. We have always been committed to supply the best quality at the best price to the knitting and weaving exporters of Pakistan.</p>
                                <div className="d-flex social-links">
                                    <i className="fab fa-facebook me-3"></i>
                                    <i className="fab fa-twitter me-3"></i>
                                    <i className="fab fa-linkedin me-3"></i>
                                    <i className="fab fa-youtube me-3"></i>
                                    <i className="fab fa-pinterest me-3"></i>
                                </div>
                            </div>
                            <div className="col-md-2 siteLinks">
                                <h3>Site Links</h3>
                                <Link to="/" onClick={scrollToTop("/")} className="d-flex align-items-center"> <i className="fas fa-arrow-right me-2"></i>  <li>Home</li></Link>
                                <Link to="/about" onClick={scrollToTop("/about")} className="d-flex align-items-center"> <i className="fas fa-arrow-right me-2"></i>  <li>About</li></Link>
                                <Link to="/yarns" onClick={scrollToTop("/yarns")} className="d-flex align-items-center"> <i className="fas fa-arrow-right me-2"></i>  <li>Yarns</li></Link>
                                <Link to="/services" onClick={scrollToTop("/services")} className="d-flex align-items-center"> <i className="fas fa-arrow-right me-2"></i>  <li>Services</li></Link>
                                <Link to="/contact" onClick={scrollToTop("/contact")} className="d-flex align-items-center"> <i className="fas fa-arrow-right me-2"></i>  <li>Contact</li></Link>
                            </div>
                            <div className="col-md-4">
                                <h3>Contact Info</h3>
                                <p><i className="fas fa-map-marker-alt me-2"></i> Sultani Elasto Products (Pvt) Ltd. 2nd Floor B.C Tower, 54 Jinnah Colony, Faisalabad, Punjab - Pakistan.</p>
                                <p><i className="fas fa-envelope me-2"></i>sultanielasto.ceo@gmail.com</p>
                                <p><i className="fas fa-phone me-2"></i>+92 41 2610215</p>
                                <p><i className="fas fa-mobile-alt me-2"></i>+92 321 608 1717</p>
                            </div>
                            <hr className="mt-4" style={{ height: "2px", backgroundColor: "white" }} />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-center"> &copy;  Sultani Group Of Industries. All Rights Reserved. Developed With Love By Technic Mentors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
