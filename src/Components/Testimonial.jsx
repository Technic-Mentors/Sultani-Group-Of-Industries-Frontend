import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientImg from "../assets/user-img.png"
export default function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false
    };
    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="slider-container py-5">
                            <Slider {...settings}>
                                <div>
                                    <div className="testContent">
                                        <div className="d-flex justify-content-center mb-4">
                                            <i className="fas fa-quote-right"></i>
                                        </div>
                                        <p className="text-center">&quot;Sultani Elasto Products (Pvt) Ltd is the largest manufacture of covered yarn in Pakistan. We have always been committed to supply the best quality at the best price to the knitting and weaving exporters of Pakistan.&quot;</p>
                                    </div>
                                    <div className="testImg" style={{ marginTop: "-6%" }}>
                                        <div className="d-flex justify-content-center">
                                            <img src={clientImg} alt="client image" style={{ height: "150px" }} />
                                        </div>
                                        <h3 className="text-center">Client Name</h3>
                                        <p className="text-center">Entrepreneur</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="testContent">
                                        <div className="d-flex justify-content-center mb-4">
                                            <i className="fas fa-quote-right"></i>
                                        </div>
                                        <p className="text-center">&quot;Sultani Elasto Products (Pvt) Ltd is the largest manufacture of covered yarn in Pakistan. We have always been committed to supply the best quality at the best price to the knitting and weaving exporters of Pakistan.&quot;</p>
                                    </div>
                                    <div className="testImg" style={{ marginTop: "-6%" }}>
                                        <div className="d-flex justify-content-center">
                                            <img src={clientImg} alt="client image" style={{ height: "150px" }} />
                                        </div>
                                        <h3 className="text-center">Client Name</h3>
                                        <p className="text-center">Entrepreneur</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="testContent">
                                        <div className="d-flex justify-content-center mb-4">
                                            <i className="fas fa-quote-right"></i>
                                        </div>
                                        <p className="text-center">&quot;Sultani Elasto Products (Pvt) Ltd is the largest manufacture of covered yarn in Pakistan. We have always been committed to supply the best quality at the best price to the knitting and weaving exporters of Pakistan.&quot;</p>
                                    </div>
                                    <div className="testImg" style={{ marginTop: "-6%" }}>
                                        <div className="d-flex justify-content-center">
                                            <img src={clientImg} alt="client image" style={{ height: "150px" }} />
                                        </div>
                                        <h3 className="text-center">Client Name</h3>
                                        <p className="text-center">Entrepreneur</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
