import { Link } from "react-router-dom";

export default function CallToAction() {

    return (
        <>
            <div className="calToActionBg mt-5">
                <div className="calToActionBg-overlay">
                    <div className="container">
                        <div className="row py-7">
                            <div className="col-md-12">
                                <h1 className="text-center text-white callActionHead">Consult With Us For The Best Quality Yarn</h1>
                                <p className="text-center text-white">Sultani Elasto Products (Pvt) Ltd is the largest manufacture of covered yarn in Pakistan. We have always been committed to supply the best quality at the best price to the knitting and weaving exporters of Pakistan.</p>
                                <div className="d-flex justify-content-center">
                                    <Link to="/contact"> <button className="btn btn1 text-white">Contact Us</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
