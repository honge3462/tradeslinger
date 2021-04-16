import React from "react";
import "./Footer.css"
import instagramIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook.png";
import { Button, Typography } from "@material-ui/core";

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <a href="https://www.instagram.com/tradeslinger.designs/" target="/blank" >
                <img src={instagramIcon} alt="instagram" className="socialMedia" />
            </a>  
            <Button variant="contained" className="button">
                <a href="https://www.etsy.com/shop/TradeslingerDesigns?fbclid=IwAR2c0gcf2W2OZqIFLkJ90f6PzD_750MKPHX2xX7xzN-m2BH1PJm_iH6UIZ4" target="/blank" className="etsy" >
                    <Typography variant="body1" >Back to Etsy</Typography>
                </a>
            </Button> 
            <a href="https://www.facebook.com/TradeslingerDesigns" target="/blank">
                <img src={facebookIcon} alt="facebook" className="socialMedia" />
            </a>
        </div>
    )
}

export default Footer;