import { useState } from "react";
import doubleYarn from "../assets/doubleYarn.avif"
import airCoveredYarn from "../assets/airCoveredYarn.avif"
import twistedYarn from "../assets/twistedYarn.avif"
import doublingYarn from "../assets/doublingYarn.avif"
import fancyYarn from "../assets/fancyYarn.avif"
import metalicYarn from "../assets/metalicYarn.avif"
import QuoteAction from "./QuoteAction";
export default function YarnPage() {
    const [activeTab, setActiveTab] = useState("double-covered-yarns");

    const handleTabChange = (tabId, e) => {
        e.preventDefault();
        setActiveTab(tabId);
    };
    return (
        <>
            {/* page header */}
            <div className="allPageHeader">
                <div className="allPageHeader-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-7">
                                <h1 className="text-center text-white">Yarns Variety</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page content */}
            <section
                className="pills-tab-section px-2 py-4 "
                style={{ backgroundColor: "#FAFAFA" }}
            >
                <div className="container-fluid pt-3 pb-2">
                    <div className="row">
                        <div className="mb-5 text-center">
                            <h5 className="text-uppercase text-center">Our Products</h5>
                            <h1 className="text-center">Colorful And Reliable Yarn</h1>
                        </div>
                        <div
                            className="col-md-3 jutify-content-center align-items-center"
                        >
                            <div className="row">
                                <ul
                                    className="nav nav-tabs industries nav-justified"
                                    id="ex1"
                                    role="tablist"
                                >
                                    <div className="col-md-12 ">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab text-start  mb-2 ${activeTab === "double-covered-yarns" ? "active" : ""
                                                    }`}
                                                id="double-covered-yarns-tab"
                                                data-mdb-toggle="pill"
                                                href="#double-covered-yarns"
                                                role="tab"
                                                onClick={(e) => handleTabChange("double-covered-yarns", e)}
                                                aria-controls="double-covered-yarns"
                                                aria-selected={activeTab === "double-covered-yarns"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "double-covered-yarns"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "double-covered-yarns"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "double-covered-yarns"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                Single/Double Covered Yarn{" "}
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab text-start mb-2 ${activeTab === "air-covered-yarns" ? "active" : ""
                                                    }`}
                                                id="air-covered-yarns-tab"
                                                data-mdb-toggle="pill"
                                                href="#air-covered-yarns"
                                                role="tab"
                                                onClick={(e) => handleTabChange("air-covered-yarns", e)}
                                                aria-controls="air-covered-yarns"
                                                aria-selected={activeTab === "air-covered-yarns"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "air-covered-yarns"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "air-covered-yarns"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "air-covered-yarns"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                Air Covered Yarn
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab text-start mb-2 ${activeTab === "twisted-yarns" ? "active" : ""
                                                    }`}
                                                id="twisted-yarns-tab"
                                                data-mdb-toggle="pill"
                                                href="#twisted-yarns"
                                                role="tab"
                                                onClick={(e) => handleTabChange("twisted-yarns", e)}
                                                aria-controls="corporate-matters"
                                                aria-selected={activeTab === "twisted-yarns"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "twisted-yarns"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "twisted-yarns"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "twisted-yarns"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                Twisted Yarn
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab text-start mb-2 ${activeTab === "doubling-yarn" ? "active" : ""
                                                    }`}
                                                id="doubling-yarn-tab"
                                                data-mdb-toggle="pill"
                                                href="#doubling-yarn"
                                                role="tab"
                                                onClick={(e) => handleTabChange("doubling-yarn", e)}
                                                aria-controls="doubling-yarn"
                                                aria-selected={activeTab === "doubling-yarn"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "pahrmacy"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "doubling-yarn"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "doubling-yarn"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                Doubling Yarn
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab text-start mb-2 ${activeTab === "metallic-yarn" ? "active" : ""
                                                    }`}
                                                id="metallic-yarn-tab"
                                                data-mdb-toggle="pill"
                                                href="#metallic-yarn"
                                                role="tab"
                                                onClick={(e) => handleTabChange("metallic-yarn", e)}
                                                aria-controls="metallic-yarn"
                                                aria-selected={activeTab === "metallic-yarn"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "metallic-yarn"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "metallic-yarn"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "metallic-yarn"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                Mettalic Yarn
                                            </a>
                                        </li>
                                    </div>

                                    <div className="col-md-12">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link-tab text-start mb-2 ${activeTab === "fancy-yarn" ? "active" : ""
                                                    }`}
                                                id="fancy-yarn-tab"
                                                data-mdb-toggle="pill"
                                                href="#fancy-yarn"
                                                role="tab"
                                                onClick={(e) => handleTabChange("fancy-yarn", e)}
                                                aria-controls="fancy-yarn"
                                                aria-selected={activeTab === "fancy-yarn"}
                                                style={{
                                                    fontWeight: "bold",
                                                    display: "block",
                                                    padding: "10px",
                                                    border:
                                                        activeTab === "fancy-yarn"
                                                            ? "none"
                                                            : "1px solid var(--primary-color)",
                                                    color:
                                                        activeTab === "fancy-yarn"
                                                            ? "#fff"
                                                            : "var(--primary-color)",
                                                    backgroundColor:
                                                        activeTab === "fancy-yarn"
                                                            ? "var(--secondary-color)"
                                                            : "white",
                                                }}
                                            >
                                                Fancy Yarn
                                            </a>
                                        </li>
                                    </div>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-9 tab-detail">
                            {/* Tab content */}
                            <div className="tab-content" id="v-pills-tabContent">
                                <div
                                    className={`tab-pane fade show ${activeTab === "double-covered-yarns" ? "active" : ""
                                        }`}
                                    id="double-covered-yarns"
                                    role="tabpanel"
                                    aria-labelledby="double-covered-yarns-tab"
                                >
                                    <div className="contaier">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div
                                                className="col-md-7 col-12"
                                            >
                                                <p>
                                                    The conventional covering process can be defined as the traditional method of manufacturing elastic yarns. Today, the company has more than three hundred state-of-the-art covering machines on which single and double covered yarns are produced.
                                                </p>
                                                <p>In this process, the elastane fibre drawn at a constant factor, is fed through a hollow spindle and covered with a covering yarn from a flanged bobbin. Its characteristics, in particular elongation, elasticity and look, depends on defined parameter of the draft as well as on the turns per metre and the covering yarn selected for the process.</p>
                                                <p>All kinds of known filament, staple and high-tech yarns with an elastic core made of elastane or rubber are used.</p>
                                            </div>
                                            <div
                                                className="col-md-5 col-12 d-flex justfiy-content-end"
                                            >
                                                <img
                                                    src={doubleYarn}
                                                    className="img-fluid"
                                                    alt="double-covered-yarns-pos"
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <p>Our covered yarns find their application mainly in the fashion sector for hosiery, bodies and seamless articles as they give the finished product a transparent look, outstanding durability and a smooth appearance with a luxurious touch.</p>
                                                <p>Due to the greater demand for comfort and well-being, our covered yarns are increasingly sought- after in the areas of medical products, sock manufacture and weaving.</p>
                                                <p>Our most widely used products:</p>
                                                <p>ALL PRODUCTS ARE AVAILABLE IN RW, DOPE DYED BLACK, AND DYED TO MATCH COLORS:</p>
                                                <ul>
                                                    <li>POLY LYCRA YARN</li>
                                                    <li>POLY SPANDEX YARN</li>
                                                    <li>NYLON LYCRA YARN</li>
                                                    <li>NYLON SPANDEX YARN</li>
                                                    <li>POLY RUBBER THREAD YARN (POLYESTER ELASTIC)</li>
                                                    <li>NYLON RUBBER THREAD YARN (NYLON ELASTIC)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "air-covered-yarns" ? "active" : ""
                                        }`}
                                    id="air-covered-yarns"
                                    role="tabpanel"
                                    aria-labelledby="air-covered-yarns-tab"
                                >
                                    <div className="contaier">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-7 col-12">
                                                <p>These yarns, which are very much in demand, are now produced by the company on fully automatic, modern, and state-of-the-art FADIS air-covering machines featuring electronic single- head selection and automatic doffers.</p>
                                                <p>The manufacture of air-covered yarns is our most efficient production process rendering it therefore particularly cost-effective. In this process, the elastane component is intermingled with a filament yarn using compressed air and wound straight onto the yarn spool.</p>
                                                <p>Air-covered yarns have a powdery look and an exceptional softness. They are mainly used for socks and seamless articles.</p>
                                            </div>
                                            <div className="col-md-5 col-12 d-flex justfiy-content-end">
                                                <img
                                                    src={airCoveredYarn}
                                                    className="img-fluid"
                                                    alt="double-covered-yarns-pos"
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <p>Our most widely used products:</p>
                                                <p>ALL PRODUCTS ARE AVAILABLE IN RW, DOPE DYED BLACK, AND DYED TO MATCH COLORS:</p>
                                                <ul>
                                                    <li>POLY LYCRA YARN</li>
                                                    <li>POLY SPANDEX YARN</li>
                                                    <li>NYLON LYCRA YARN</li>
                                                    <li>NYLON SPANDEX YARN</li>
                                                    <li>AB YRAN</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "twisted-yarns" ? "active" : ""
                                        }`}
                                    id="twisted-yarns"
                                    role="tabpanel"
                                    aria-labelledby="twisted-yarns-tab"
                                >
                                    <div className="contaier">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-7 col-12">
                                                <p>A large number of yarn-finishing methods have now evolved from the original term of &quot;twisting&quot; which merely meant the intertwining of two or more yarns.</p>
                                                <p>Sultani Elasto Products (Pvt) Ltd specializes in the following yarn-twisting processes:</p>
                                                <ul>
                                                    <li>CORDONETT</li>
                                                    <li>RING-TWISTED YARN</li>
                                                    <li>TWO FOR ONE TWISTING (FILAMENT)</li>
                                                    <li>UPTWIST YARN</li>
                                                </ul>

                                            </div>
                                            <div className="col-md-5 col-12 d-flex justfiy-content-end">
                                                <img
                                                    src={twistedYarn}
                                                    className="img-fluid"
                                                    alt="double-covered-yarns-pos"
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <p>To manufacture Cordonett on the Lezzeni twisting machines shown here, the individual thread is first hard twisted. Then, two or three of these individual threads are twisted together in opposite directions. The materials used are filament yarns such as viscose, polyamide and polyester. These yarns ideally lend themselves for producing lingerie lace. To create the desired design, organize is frequently used as effect yarn. Moreover, these twisted yarns are used as embroidery and sewing threads, as well as selvedge yarns but also for various technical applications. Double-deck twisters are used to produce a great variety of elastic and non-elastic blended yarns, either with synthetic/synthetic or synthetic/staple fibres, which are mostly used for knitted fabrics.</p>
                                                <p>Twists can be distinguished from single yarns by their enhanced evenness and stability, reduced pilling and better wear resistance.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "doubling-yarn" ? "active" : ""
                                        }`}
                                    id="doubling-yarn"
                                    role="tabpanel"
                                    aria-labelledby="doubling-yarn"
                                >
                                    <div className="contaier">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-7 col-12">
                                                <p>This yarn is created by twisting two or more yarns or single threads produced during twisting at head for example on ring spinning machines. Twisting is done on twisting machines where individual threads are twisted together by a ply twist. Based on the number of individual threads from which the twisted yarn is made the yarn is called double-twisted, triple-twisted etc. Apart from single-stage twisted yarns, multi-stage twisted yarns are made by repeated twisting. Doubled yarns can be made by a regular twist smooth twisting or as textured yarns with different colors or volumes.</p>
                                                <p>We can provide all custom products on demand. If you need any product with doubled yarn just contact us and we will make it for you.</p>
                                            </div>
                                            <div className="col-md-5 col-12 d-flex justfiy-content-end">
                                                <img
                                                    src={doublingYarn}
                                                    className="img-fluid"
                                                    alt="double-covered-yarns-pos"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "metallic-yarn" ? "active" : ""
                                        }`}
                                    id="metallic-yarn"
                                    role="tabpanel"
                                    aria-labelledby="metallic-yarn"
                                >
                                    <div className="contaier">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-7 col-12">
                                                <p>The ancient Egyptians produced their metallic yarns from pure gold, it was tapped into extremely thin gold-leaf which was then laminated with stronger paper. This laminate was then slit with a razor into very fine strips and twisted with cotton or silk. No less sophisticated was the later method, where pure metal wires were pressed and supported by natural fibres. The great leap forward to industrial processing was achieved in 1927, when metallic yarn was manufactured for the first time from aluminum foil. This development brought about a large selection of different qualities.</p>
                                                <p>We now manufacture metallic yarns with state-of-the-art processes. Sultani offers metallic yarns made of specially coated polyester, which is reinforced by polyamide in a covering process. All covered metallic yarns listed retain their appearance after the dyeing process.</p>
                                            </div>
                                            <div className="col-md-5 col-12 d-flex justfiy-content-end">
                                                <img
                                                    src={metalicYarn}
                                                    className="img-fluid"
                                                    alt="double-covered-yarns-pos"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "fancy-yarn" ? "active" : ""
                                        }`}
                                    id="fancy-yarn"
                                    role="tabpanel"
                                    aria-labelledby="fancy-yarn"
                                >
                                    <div className="contaier">
                                        <div className="row">
                                            <div className="col-md-7 col-12">
                                                <p>Fancy yarns are those in which some deliberate decorative discontinuity or interruption is introduced, of either or form, or of both color and form. This discontinuity is incorporated with the intention of producing an enhanced aesthetic effect. The yarns with metallic appearance known as Metallic Yarns are also included in the fancy yarns.</p>
                                                <p>We can provide all custom products on demand. If you need any product with fancy yarn just contact us and we will make it for you.</p>
                                                <ul>
                                                    <li>AYUODIA VISCOSE WHITE (NEPS)</li>
                                                    <li>AYUODIA COTTON WHITE (NEPS)</li>
                                                    <li>AYUODIA PP WHITE (NEPS)</li>
                                                    <li>AYUODIA PV WHITE (NEPS)</li>
                                                    <li>SHORT SLUB VISCOSE</li>
                                                    <li>- GANDAM SLUB VISCOSE (SEED SLUB)</li>
                                                    <li>W266 AYUODIA VISCOSE + COTTON</li>
                                                    <li>W25 AYUODIA VISCOSE + COTTON</li>
                                                    <li>GREY AYOUDIA COTTON (NEPS)</li>
                                                    <li>3.4 NAT PRAIM SLUB PV</li>
                                                    <li>3.4 NAT PRAIN SLUB PP</li>
                                                    <li>(RICE) SLUB VISCOSE</li>
                                                    <li>FANCY BRAWO 100% VISCOSE</li>
                                                    <li>17/S FANCY</li>
                                                    <li>16/S FANCY</li>
                                                    <li>15/S FANCY 100% VISCOSE</li>
                                                    <li>GAYP AYUODIA VISCOSE +COTTON</li>
                                                    <li>RAINBOW SLUB</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-5">
                                                <img
                                                    src={fancyYarn}
                                                    className="img-fluid"
                                                    alt="double-covered-yarns-pos"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Tab content */}
                        </div>
                    </div>
                </div>
            </section>
            <QuoteAction />
        </>
    )
}
