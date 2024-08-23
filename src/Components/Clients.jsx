import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../assets/client1.jpg"
import client2 from "../assets/client2.gif"
import client3 from "../assets/client3.png"
import client4 from "../assets/client4.jpg"
import client5 from "../assets/client5.png"
import client6 from "../assets/client6.png"
import client7 from "../assets/client7.png"

export default function Clients() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <>
            <div className="clientBg">
                <div className="container">
                    <div className="slider-container py-5">
                        <Slider {...settings}>
                            <div className="clientImgBg">
                                <img src={client1} alt="client logo" className="img-fluid" />
                            </div>
                            <div className="clientImgBg">
                                <img src={client2} alt="client logo" className="img-fluid" />
                            </div>
                            <div className="clientImgBg">
                                <img src={client3} alt="client logo" className="img-fluid" style={{ width: "96%" }} />
                            </div>
                            <div className="clientImgBg">
                                <img src={client1} alt="client logo" className="img-fluid" />
                            </div>
                            <div className="clientImgBg">
                                <img src={client4} alt="client logo" className="img-fluid" />
                            </div>
                            <div className="clientImgBg">
                                <img src={client5} alt="client logo" className="img-fluid" />
                            </div>
                            <div className="clientImgBg">
                                <img src={client6} alt="client logo" className="img-fluid" />
                            </div>
                            <div className="clientImgBg">
                                <img src={client7} alt="client logo" className="img-fluid" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
