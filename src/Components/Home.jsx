import HomeHeader from "./HomeHeader";
import aboutSecImg from "../assets/aboutSecImg.avif"
import doubleYarn from "../assets/doubleYarn.avif"
import airCoveredYarn from "../assets/airCoveredYarn.avif"
import twistedYarn from "../assets/twistedYarn.avif"
import doublingYarn from "../assets/doublingYarn.avif"
import fancyYarn from "../assets/fancyYarn.avif"
import metalicYarn from "../assets/metalicYarn.avif"
import CallToAction from "./CallToAction";
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom";
import QuoteAction from "./QuoteAction";
export default function Home() {
    return (
        <>
            <HomeHeader />
            {/* about us section */}
            <div className="container pt-5">
                <div className="row g-4 aboutSec align-items-center">
                    <div className="col-md-5 aboutSecImg">
                        <img src={aboutSecImg} alt="yarn manufacturing image" className="img-fluid" style={{ borderRadius: "16px" }} />
                    </div>
                    <div className="col-md-7 aboutSecCon">
                        <h5 className="text-uppercase color1">About Us</h5>
                        <h1>You Can Find All Kinds of Yarn Here</h1>
                        <p>Sultani Elasto Products (Pvt) Ltd is the largest manufacture of covered yarn in F. We have always been committed to supply the best quality at the best price to the knitting and weaving exporters of Pakistan.</p>
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
                        <div className="d-flex mt-3">
                            <Link to="/about"> <button className="btn btn1 aboutBtn">
                                Read More
                            </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            {/* industry numbers */}
            <div className="numberBg mt-5">
                <div className="numberBg-overlay">
                    <div className="container">
                        <div className="row g-4 py-7">
                            <div className="col-md-3">
                                <h1 className="text-white">Our Indusry In Numbers</h1>
                            </div>
                            <div className="col-md-3">
                                <h3 className="text-center">100</h3>
                                <h3 className="text-center">Completed Projects</h3>
                            </div>
                            <div className="col-md-3">
                                <h3 className="text-center">100</h3>
                                <h3 className="text-center">Export Country</h3>
                            </div>
                            <div className="col-md-3">
                                <h3 className="text-center">500+</h3>
                                <h3 className="text-center">Satisfied Customer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product section */}
            <div className="productBg mt-5">
                <div className="product-overlay">
                    <div className="container">
                        <h5 className="text-uppercase text-center">Our Products</h5>
                        <h1 className="text-center">Colorful And Reliable Yarn</h1>
                        <div className="row g-4">
                            <div className="col-md-4 productCol">
                                <img src={doubleYarn} alt="double yarn" className="img-fluid" />
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Double Covered Yarns</h3>
                                        <p>The conventional covering process can be defined as the traditional method of manufacturing elastic yarns.</p>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/yarns">Read More <i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 productCol">
                                <img src={airCoveredYarn} alt="double yarn" className="img-fluid" />
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Air-Covered Yarns</h3>
                                        <p>These yarns, which are very much in demand, are now produced by the company on fully automatic,...</p>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/yarns">Read More <i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 productCol">
                                <img src={twistedYarn} alt="double yarn" className="img-fluid" />
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Twisted Yarns</h3>
                                        <p>A large number of yarn-finishing methods have now evolved from the original term of &quot;twisting&quot; which merely meant the intertwining ...</p>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/yarns">Read More <i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 productCol">
                                <img src={doublingYarn} alt="double yarn" className="img-fluid" />
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Doubling Yarn</h3>
                                        <p>This yarn is created by twisting two or more yarns or single threads produced during twisting at head for example on ring spinning machines.</p>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/yarns">Read More <i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 productCol">
                                <img src={metalicYarn} alt="double yarn" className="img-fluid" />
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Metallic Yarn</h3>
                                        <p>The ancient Egyptians produced their metallic yarns from pure gold, it tapped into extremely thin gold-leaf which laminated with stronger paper.</p>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/yarns">Read More <i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 productCol">
                                <img src={fancyYarn} alt="double yarn" className="img-fluid" />
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Fancy Yarn</h3>
                                        <p>Fancy yarns are those in which some deliberate decorative discontinuity or interruption is introduced, of either or form, or of both color and form.</p>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/yarns">Read More <i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* chose us section */}
            <div className="productBg mt-5">
                <div className="product-overlay">
                    <div className="container">
                        <h5 className="text-uppercase text-center">Chose Us</h5>
                        <h1 className="text-center">Why Chose Us</h1>
                        <div className="row g-4 choseCard">
                            <p>At Sultani Group, we offer high-quality, durable yarn in a wide range of colors and types. Our products are eco-friendly and crafted with care. We provide excellent customer service, competitive prices, and fast shipping. Choose us for your knitting and crocheting projects and experience the best in yarn quality and variety.</p>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Premium-Quality Yarns</h3>
                                        <p>We offer premium-quality yarns that ensure durability, vibrant colors, and superior texture for all your knitting and crocheting projects.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Extensive Product Line</h3>
                                        <p>Our extensive product line includes a variety of yarn types, colors, and weights to suit all your creative needs and preferences.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Crafted with Precision</h3>
                                        <p>Our yarns are crafted with precision and care by skilled artisans, ensuring top-notch quality and consistency in every skein.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Innovative Product Range</h3>
                                        <p>We continuously innovate and expand our product range to bring you the latest trends and advancements in the yarn industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Competitive Prices</h3>
                                        <p>We offer high-quality yarn at competitive prices, making it accessible for hobbyists and professionals alike.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Community Engagement</h3>
                                        <p>We actively engage with our community through workshops, tutorials, and events, fostering a supportive and inspiring environment for yarn enthusiasts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <CallToAction />
            {/* services section */}
            <div className="container pt-5">
                <h5 className="text-uppercase text-center">Our Services</h5>
                <h1 className="text-center">What We Do</h1>
                <div className="row g-4 sercicesSection mt-2">
                    <div className="col-md-2">
                        <h5>Covered Yarns</h5>
                        <p>The conventional covering process can be defined as the traditional method of manufacturing elastic yarns.</p>
                    </div>
                    <div className="col-md-2">
                        <h5>Fancy Yarns</h5>
                        <p>Fancy yarns are those in which some deliberate decorative discontinuity or interruption is introduced.</p>
                    </div>
                    <div className="col-md-2">
                        <h5>Elastic Tapes</h5>
                        <p>Sultani Elasto Products (Pvt) Ltd has its own dedicated elastic tapes unit.We are producing elastic tapes.</p>
                    </div>
                    <div className="col-md-2">
                        <h5>Yarn Doubling</h5>
                        <p>This yarn is created by twisting two or more yarns or single threads produced during twisting at head ring spinning machines.</p>
                    </div>
                    <div className="col-md-2">
                        <h5>Yarn Dyieng</h5>
                        <p>Experience the vibrant hues and unmatched quality of our expertly dyed yarns, crafted to bring your creative visions to life.</p>
                    </div>
                    <div className="col-md-2">
                        <h5>Sewing Thread</h5>
                        <p>Sewing threads are special kinds of yarns that are engineered and designed to pass through a sewing machine rapidly.</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/services" style={{ color: "initial" }}> <button className="btn btn1">View Services Detail</button></Link>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h3>Space Dyeing</h3>
                                <p>Space dyeing is a process used for creating yarns with multiple colors effect. Generally, a yarn comes only in one color. But a space dyed yarn comes with more than two colors on them. This type of space dyed yarns is also known as dip dyed yarns. The secret to a well produced space dyed yarn is a chemical called as &apos;mordant&apos;. This chemical helps to fix the dye on the yarn after each color is dyed. This is why a space dyed yarn is capable of holding more than one or more colors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h3>Sewing Thrade</h3>
                                <p>Sewing threads are special kinds of yarns that are engineered and designed to pass through a sewing machine rapidly. They form efficient stitches without breaking or becoming distorted during the useful life of the product. The basic function of a thread is to deliver aesthetics and performance in stitches and seams</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/*  */}
            <Testimonial />
            <QuoteAction />
        </>
    )
}
