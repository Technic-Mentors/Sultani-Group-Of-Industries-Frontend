import elasticTapes from "../assets/elasticTapes.avif"
import QuoteAction from "./QuoteAction";
export default function Tapes() {
    return (
        <>
            {/* page header */}
            <div className="allPageHeader">
                <div className="allPageHeader-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-7">
                                <h1 className="text-center text-white">Elastic Tapes</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page content */}
            <div className="container py-4">
                <h5 className="text-uppercase text-center">Our Products</h5>
                <h1 className="text-center">Reliable Elastic Tapes</h1>
                <div className="row align-items-center">
                    <div className="col-md-6 elasticTapes">
                        <h1>Elastic Tapes</h1>
                        <p>Sultani Elasto Products (Pvt) Ltd has its own dedicated elastic tapes unit. We are producing elastic tapes by using the latest, modern, and state of the art chrochet machines from Italy. Some of our products are mentioned below:</p>
                        <ul>
                            <li>JACQUARD ELASTIC</li>
                            <li>ELASTIC TAPE</li>
                            <li>TWILL TAΡΕ</li>
                            <li>BIAS TAPE</li>
                            <li>BRAIDED ELASTIC</li>
                            <li>KNIT ELASTIC</li>
                            <li>CORD ELASTIC</li>
                            <li>BUTTONHOLE ELASTIC</li>
                            <li>DRAWSTRING ELASTIC</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src={elasticTapes} alt="elastic tape" className="img-fluid" />
                    </div>
                </div>
            </div>
            <QuoteAction/>
        </>
    )
}
