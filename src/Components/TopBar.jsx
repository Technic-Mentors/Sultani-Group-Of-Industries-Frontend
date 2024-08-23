
export default function TopBar() {
    return (
        <>
            <div className="topBar d-none d-lg-block">
                <div className="container-fluid">
                    <div className="row align-items-center px-3">
                        <div className="col-md-5 d-flex">
                            <div className="d-flex align-items-center me-5">
                                <i className="fas fa-mobile-alt me-2"></i>
                                <p>+92 321 608 1717</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-envelope me-2"></i>
                                <p>sultanielasto.ceo@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-end">
                            <div
                                target="blank"
                                className="nav-fill me-2"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <div

                                target="blank"
                                className="nav-fill me-2"
                            >
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div

                                target="blank"
                                className="nav-fill me-2"
                            >
                                <i className="fab fa-youtube"></i>
                            </div>
                            <div

                                target="blank"
                                className="nav-fill me-2"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                            <div

                                target="blank"
                                className="nav-fill me-2"
                            >
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div

                                target="blank"
                                className="nav-fill"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
