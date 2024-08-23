import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function HomeHeader() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        pauseOnHover: false
    };
    return (
        <>
            <Slider {...settings}>
                <div className="homeHeader1-bg">
                    <div className="homeHeader-overlay">
                        <div className="container">
                            <div className="row py-6 justify-content-center">
                                <div className="col-md-8 text-white text-center">
                                    <h5 className="text-uppercase text-white">Sultani Group Of Industries</h5>
                                    <h1 className="text-white">Largest Manufacturer Covered Yarn</h1>
                                    <p>Sultani Elasto Products (Pvt) Ltd is the largest manufacture of covered yarn in Pakistan. We have always been committed to supply the best quality at the best price to the knitting and weaving exporters of Pakistan.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homeHeader2-bg">
                    <div className="homeHeader-overlay">
                        <div className="container">
                            <div className="row py-6 justify-content-center">
                                <div className="col-md-8 text-white text-center">
                                    <h5 className="text-uppercase text-white">Sultani Group Of Industries</h5>
                                    <h1 className="text-white">Reliable Elastic Tapes</h1>
                                    <p>Sultani Elasto Products (Pvt) Ltd has its own dedicated elastic tapes unit. We are producing elastic tapes by using the latest, and modern and state of the art chrochet machines from Italy.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homeHeader3-bg">
                    <div className="homeHeader-overlay">
                        <div className="container">
                            <div className="row py-6 justify-content-center">
                                <div className="col-md-8 text-white text-center">
                                    <h5 className="text-uppercase text-white">Sultani Group Of Industries</h5>
                                    <h1 className="text-white">SULTANI FABRICS (PVT) LTD</h1>
                                    <p> The management of Sultani Elasto Products (Pvt) Ltd assessed the needs of the exporters of Pakistan and started new line of a business in yarn dyeing and sewing thread manufacturing..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>

        </>
    )
}
