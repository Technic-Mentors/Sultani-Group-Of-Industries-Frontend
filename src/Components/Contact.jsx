import QuoteAction from "./QuoteAction";
export default function Contact() {
    return (
        <>
            {/* page header */}
            <div className="allPageHeader">
                <div className="allPageHeader-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-7">
                                <h1 className="text-center text-white">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page content */}
            <div className="container contactInfo pt-5">
                <div className="row g-4 justify-content-between">
                    <div className="col-md-4">
                        <h2>Head Office</h2>
                        <p>Sultani Elasto Products (Pvt) Ltd.
                            2nd Floor B.C Tower, 54 Jinnah Colony,
                            Faisalabad, Punjab - Pakistan.</p>
                        <div className=" mt-4">
                            <p style={{ marginBottom: 0 }}><i className="fas fa-phone"></i> +92 41 2610215</p>
                        </div>
                        <div className=" mt-4">
                            <p style={{ marginBottom: 0 }}><i className="fas fa-mobile-alt"></i> +92 321 608 1717</p>
                        </div>
                        <div className=" mt-4">
                            <p style={{ marginBottom: 0 }}><strong>ZipCode :</strong> 38000</p>
                        </div>
                        <div className=" mt-4">
                            <p style={{ marginBottom: 0 }}><i className="fas fa-envelope me-2"></i>sultanielasto.ceo@gmail.com</p>
                        </div>
                        <div className=" mt-4">
                            <p style={{ marginBottom: 0 }}><i className="fas fa-envelope me-2"></i>khalid@sultanielasto.com.pk</p>
                        </div>
                        <div className=" mt-4">
                            <p style={{ marginBottom: 0 }}><i className="fas fa-envelope me-2"></i>umersultaani@gmail.com</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h2>Sub Offices</h2>
                        <div className="card">
                            <div className="card-body">
                                <p>Sultani Elasto Products (Pvt) Ltd.
                                    Office # 11 Second Floor, Shan Arcade,
                                    Barkat Market Lahore - Pakistan.</p>
                                <p><i className="fas fa-mobile-alt"></i> +92 321 608 1717</p>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-body">
                                <p>Sultani Elasto Products (Pvt) Ltd.
                                    308 - 3rd Floor SP Chamber Site,
                                    Karachi - Pakistan.</p>
                                <p><i className="fas fa-mobile-alt"></i> +92 321 608 1717</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h2>Factories</h2>
                        <div className="card">
                            <div className="card-body">
                                <p> Elasto Products (Pvt) Ltd.
                                    18-km (Near Makuana Bypass) Jaranwala Road,
                                    Faisalabad - Pakistan.</p>
                                <p><i className="fas fa-phone"></i> +92 41 2435151-60</p>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-body">
                                <p>Sultani Elasto Products (Pvt) Ltd.
                                    18-km Near Ashfaq Mills Drainage,
                                    Jaranwala Road, Faisalabad - Pakistan.</p>
                                <p><i className="fas fa-phone"></i> +92 41 2435151-60</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* contact form */}
            <div className="container contactForm py-5">
                <div className="row g-3">
                    <h1 >Get In Touch With Us!</h1>
                    <div className="col-md-6">
                        <form >
                            <input type="text" className="form-control" placeholder="Name" />
                            <input type="email" className="form-control mt-4" placeholder="Email" />
                            <input type="subject" className="form-control mt-4" placeholder="Subject" />
                            <textarea name="" id="" cols="30" rows="10" className="form-control mt-4" placeholder="Message"></textarea>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="btn btn1">Send Now</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8384980412507!2d73.06648227442037!3d31.4185754521664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242be109dbefd%3A0x52fd56f2817c78bc!2sSultani%20Elasto%20Product!5e0!3m2!1sen!2s!4v1721906956677!5m2!1sen!2s" width="100%" height={415} style={{ boxShadow: "0 0 20px #cfcfcf", border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                </div>
            </div >
            <QuoteAction />
        </>
    )
}
