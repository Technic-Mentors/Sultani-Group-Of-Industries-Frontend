// import spaceDyeing from "../assets/spaceDyeing.avif"
// import sewingThread from "../assets/sewingThread.avif"
import QuoteAction from "./QuoteAction";
import { Link } from "react-router-dom";
export default function Services() {
    return (
        <>
            {/* page header */}
            <div className="allPageHeader">
                <div className="allPageHeader-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-7">
                                <h1 className="text-center text-white">Our Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page content */}
            <div className="container pt-4 pb-5">
                <div className="row justify-content-between">
                    <div className="col-md-12 mb-3">
                        <h1 className="text-center">Sultani Fabrics (PVT) LTD</h1>
                        <p>The management of Sultani Elasto Products (Pvt) Ltd assessed the needs of the exporters of Paki and started new line of business in yarn dyeing and sewing thread manufacturing. In 2017-2018, Sultani Fabrics (Pvt) Ltd was established to diversify our business to transform Sultani Group of Companies as a one-stop supplier for all of the yarn needs of our valued customersFFF in Pakistan an abroad. We have state-of-the-art machinery clubbed with the best-in-the-field minds in industry serve our customers in Pakistan and abroad. Sultani Fabrics (Pvt) Ltd has become one of the larg suppliers of dyeing services and dyed products not only in Pakistan but also abroad. We are curre exporting our products to the USA, Bangladesh, Sri Lanka, Turkey, Vietnam, Djibouti and Bulgaria</p>
                        <p>Sultani Fabrics (Pvt) Ltd has the facility of dyeing the following types of yarns to the utmost satisfaction of our valued customers:</p>
                        <ul>
                            <li>Polyester Yarn</li>
                            <li>High stretch Polyester Yarn</li>
                            <li>Nylon Yarn</li>
                            <li>Cotton Yarn</li>
                            <li>Polyester/Cotton (PC) Yarn</li>
                            <li>Viscose Yarn</li>
                            <li>Polyester/Viscose Yarn</li>
                        </ul>
                        <p>Space Dyeing having different colors along on each strand of yarn
                            We have daily capacity to process 80 Tons of different yarns. Furthermore, we can manufacture type of sewing thread as required by our customers with an estimated capacity of 10000 cones p day. Our sewing thread is used in denim, knitwear, hosiery, bedding, home textiles, and other industries.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h3>Covered Yarns</h3>
                        <p>These yarns, which are very much in demand, are now produced by the company on fully automatic, modern, and state-of-the-art FADIS air-covering machines featuring electronic single- head selection and automatic doffers.
                            The manufacture of air-covered yarns is our most efficient production process rendering it therefore particularly cost-effective.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Fancy Yarns</h3>
                        <p>Fancy yarns are those in which some deliberate decorative discontinuity or interruption is introduced, of either or form, or of both color and form. This discontinuity is incorporated with the intention of producing an enhanced aesthetic effect. The yarns with metallic appearance known as Metallic Yarns are also included in the fancy yarns.</p>
                    </div>
                    <div className="calToActionBg my-3" style={{ padding: "0" }}>
                        <div className="calToActionBg-overlay" style={{ color: "white", padding: "0" }}>
                            <div className="row p-4 g-4">
                                <div className="col-md-6">
                                    <h3>Elastic Tapes</h3>
                                    <p style={{ margin: "0" }}>Sultani Elasto Products (Pvt) Ltd has its own dedicated elastic tapes unit. We are producing elastic tapes by using the latest, modern, and state of the art chrochet machines from Italy. Some of our products are mentioned below:</p>
                                    <ul style={{ margin: "0" }}>
                                        <li>JACQUARD ELASTIC</li>
                                        <li>ELASTIC TAPE</li>
                                    </ul>
                                    <Link to="/tapes"> <button className="btn btn1 text-white">View More</button></Link>
                                </div>
                                <div className="col-md-6">
                                    <h3>Yarn Doubling</h3>
                                    <p>This yarn is created by twisting two or more yarns or single threads produced during twisting at head for example on ring spinning machines. Twisting is done on twisting machines where individual threads are twisted together by a ply twist. Based on the number of individual threads from which the twisted yarn is made the yarn is called double-twisted, triple-twisted etc.Apart from single-stage twisted yarns, multi-stage twisted yarns are made by repeated twisting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Space Dyeing</h3>
                        <p>Space dyeing is a process used for creating yarns with multiple colors effect. Generally, a yarn comes only in one color. But a space dyed yarn comes with more than two colors on them. This type of space dyed yarns is also known as dip dyed yarns. The secret to a well produced space dyed yarn is a chemical called as &apos;mordant&apos;.</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Sewing Thread</h3>
                        <p>Sewing threads are special kinds of yarns that are engineered and designed to pass through a sewing machine rapidly. They form efficient stitches without breaking or becoming distorted during the useful life of the product. The basic function of a thread is to deliver aesthetics and performance in stitches and seams.</p>
                    </div>


                </div>
                {/* <div className="row justify-content-between mt-4 reverseOrder">
                    <div className="col-md-5">
                        <img src={sewingThread} alt="space deying image" className="img-fluid" />
                    </div>
                    <div className="col-md-5">
                        <img src={spaceDyeing} alt="space deying image" className="img-fluid" />
                    </div>
                </div> */}
            </div>
            <QuoteAction />
        </>
    )
}
