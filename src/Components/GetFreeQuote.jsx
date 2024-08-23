
export default function GetFreeQuote() {
    return (
        <>
            {/* page header */}
            <div className="allPageHeader">
                <div className="allPageHeader-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-7">
                                <h1 className="text-center text-white">Free Consultation</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page content */}
            <div className="container contactForm py-5">
                <div className="row g-3 justify-content-center">
                    <h1 className="text-center">Get Free Quote</h1>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="col-md-12">
                        <input type="subject" className="form-control" placeholder="Subject" />
                        <textarea name="" id="" cols="30" rows="10" className="form-control mt-3" placeholder="Message"></textarea>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn1">Send Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
