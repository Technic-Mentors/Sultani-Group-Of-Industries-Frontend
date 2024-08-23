import aboutPageImg from "../assets/aboutPageImg.avif"
import CallToAction from "./CallToAction"
import Testimonial from "./Testimonial"
import QuoteAction from "./QuoteAction";
export default function About() {
    return (
        <>
            {/* page header */}
            <div className="allPageHeader">
                <div className="allPageHeader-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-7">
                                <h1 className="text-center text-white">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page content */}
            <div className="container pt-5">
                <div className="row g-4 aboutSec">
                    <div className="col-md-12">
                        <h5 className="text-uppercase text-center">About Us</h5>
                        <h1 className="text-center">You Can Find All Kinds of Yarn Here</h1>
                        <p>We take our products as package comprising of the products of the highest quality and affordable price coupled with quality services in the supply and application of our products. We have the trust and confidence of all of the exporters of Pakistan in knitting and weaving sector. It is because of the commitment with our products and our services offered before, during, and after the delivery of our products till their use.</p>
                        <p>Sultani Elasto Products was established in 1997 with the aim of supplying covered yarn to the socks, gloves, and denim manufacturers and exporters in Pakistan. We won the confidence of all of the exporters of Pakistan shortly thereafter. The company focused on continuous improvements in its technological, human, and logistics resources. The company always focused and still focusing in continuously upgrading the machinery and system. We have modern and state of the art machinery from Italy, Switzerland, Korea, and Japan. We are expanding to the business of fancy yarn, elastic tapes, yarn dyeing, and finishing under the umbrella of Sultani Fabrics (Pvt) Ltd. In all of our businesses, we are committed to the best quality at the best price!</p>
                    </div>
                    <div className="col-md-5 aboutSecImg">
                        <img src={aboutPageImg} alt="yarn manufacturing image" className="img-fluid" style={{ borderRadius: "16px" }} />
                    </div>
                    <div className="col-md-7 aboutSecCon">
                        <div className="row justify-content-between">
                            <div className="col-md-5 aboutSecMission">
                                <h3 className="mb-4">Our Mission</h3>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i><p>Attain the highest levels of product quality.</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i><p>Expand continuously, horizontally and vertically.</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i><p>Become a leading supplier in Pakistan.</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i><p>Provide excellent service to exporters.</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i><p>Maintain a focus on continuous improvement.</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <h3 className="mb-4">Our Vission</h3>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i> <p>Attain the highest levels of customer satisfaction.</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i> <p>Provide customers with a competitive edge.</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i> <p>Offer value-added products.</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i> <p>Ensure the highest quality of products.</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-check me-2"></i> <p>Deliver products at the best price.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*  */}
            <CallToAction />
            {/* quality control */}
            <div className="productBg mt-5">
                <div className="product-overlay">
                    <div className="container">
                        <div className="row qualitySec">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h1>Quality Control</h1>
                                        <p>We, at Sultani Elasto Products (Pvt) Ltd., have a well-developed Quality Control System. Our yarns are constantly subjected to tests and quality controls in our own laboratories. Yarns are checked in view of product requirements such as composition, stress-strain performance, breaking strength and turns per meter.
                                            Our prime objective is to achieve the defined quality levels in all areas and production steps.
                                            It is our firm conviction that no compromises in terms of quality will be allowed. The basis for this pledge was the implementation of a quality management system and the following certification according to EN ISO.
                                            The principle of top quality likewise applies to the selection of our raw materials since the manufacture of superior finished products is only possible if the materials used at the start are in perfect condition. With the Oeko-Tex standard 100 for the product category I and II, respectively, it is ensured that the yarns we use comply with the currently applicable human- ecological requirements.
                                            First-class materials, fastidious processing and constant checks guarantee consistent yarn quality in the long term and thus satisfaction of our valued customer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <Testimonial />
            <QuoteAction />
        </>
    )
}
