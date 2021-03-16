import React from "react";
import "./Footer.css"
import instagramIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook.png";
import { Typography } from "@material-ui/core";

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/tradeslinger.designs/" >
                <img src={instagramIcon} alt="instagram" className="socialMedia" />
            </a>   
            <a href="https://www.etsy.com/shop/TradeslingerDesigns?fbclid=IwAR2c0gcf2W2OZqIFLkJ90f6PzD_750MKPHX2xX7xzN-m2BH1PJm_iH6UIZ4" >
                <Typography variant="body1">Etsy</Typography>
            </a>
            <a href="https://www.facebook.com/TradeslingerDesigns">
                <img src={facebookIcon} alt="facebook" className="socialMedia" />
            </a>
        </div>
    )
}

export default Footer;