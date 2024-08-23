import { Link } from "react-router-dom";

export default function QuoteAction() {
    return (
        <>
            <div className="container quoteAction">
                <div className="row py-5 justify-content-between align-items-center">
                    <div className="col-md-8">
                        <h1 className="text-white">Request your free quote now!</h1>
                    </div>
                    <div className="col-md-3 d-flex justify-content-end">
                        <Link to="/getFreeQuote">   <button className="btn btn1" style={{ backgroundColor: "white", color: "var(--secondary-color)" }}>Get Free Quote</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
