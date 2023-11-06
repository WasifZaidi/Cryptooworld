import React from "react";
import "./Css/Footer.css"
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {


    return (
        <div className="Footer">
            <div className="Footer-Content">
                <div className="Social-icons"><a href="#"><BsFacebook/></a><a href="#"><BsInstagram/></a><a href="#"><BsTwitter/></a><a
                    href="#"><BsLinkedin/></a></div>
                <div className="Quick-links"><Link to={"/"}>Home</Link><Link to={"/crypto"}>Crypto Currencies</Link> <Link to={"/exchange"}>Exchanges</Link><Link to={"/news"}>News</Link></div>
            </div>
        </div>
    );
}
export default Footer;