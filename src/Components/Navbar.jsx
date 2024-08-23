import { Link, useLocation } from "react-router-dom"
import sultaniLogo from "../assets/sultani-elasto-logo.avif"
import { useEffect, useRef, useState } from "react"
export default function Navbar() {
    const [isNavbar, setIsNavbar] = useState(false)
    const location = useLocation()
    const navRef = useRef()
    const isLinkActive = (link) => {
        if (location.pathname === link) {
            return "active"
        }
    }
    const handleNavBar = () => {
        setIsNavbar(!isNavbar)
    }
    const closeNavbar = () => {
        if (window.innerWidth <= 700) {
            setIsNavbar(!isNavbar)
        }
    }
    useEffect(() => {
        const closeNavbarOnClick = (e) => {
            if (window.innerWidth <= 700) {
                if (navRef.current && !navRef.current.contains(e.target)) {
                    setIsNavbar(false)
                }
            }
        }
        document.addEventListener("click", closeNavbarOnClick)
        return (() => {
            document.removeEventListener("click", closeNavbarOnClick)
        })
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent" ref={navRef}>
                <div className="container-fluid px-4">
                    <Link className="navbar-brand" to="/">
                        <img src={sultaniLogo} alt="" style={{ height: "70px" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavbar} onClick={handleNavBar} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbar ? "show" : ""}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item navBar-item">
                                <Link className={`nav-link ${isLinkActive("/")}`} onClick={closeNavbar} to="/">Home</Link>
                            </li>
                            <li className="nav-item navBar-item">
                                <Link className={`nav-link ${isLinkActive("/about")}`} onClick={closeNavbar} to="/about">About</Link>
                            </li>
                            <li className="nav-item navBar-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className={`dropdown-item ${isLinkActive("/yarns")}`} onClick={closeNavbar} to="/yarns" >Yarns</Link></li>
                                    <li><Link className={`dropdown-item ${isLinkActive("/tapes")}`} onClick={closeNavbar} to="/tapes">Tapes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item navBar-item">
                                <Link className={`nav-link ${isLinkActive("/services")}`} onClick={closeNavbar} to="/services">Services</Link>
                            </li>
                            <li className="nav-item navBar-item me-3">
                                <Link className={`nav-link ${isLinkActive("/contact")}`} onClick={closeNavbar} to="/contact">Contact</Link>
                            </li>
                            <Link to="/getFreeQuote" style={{ color: "initial" }} onClick={closeNavbar}> <button className="btn btn1">Get Free Quote</button></Link>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
