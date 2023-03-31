import React from "react";
import './NFT-Card-Style.css'

const NFT = (props) => {

    var Image = props.Image;
    var Title = props.Title;
    var Creator = props.Creator;
    var Profile = props.Profile;
    var Description = props.Description;
    var Price = props.Price;

    return (
        <div className="NFT-Box">
            <div className="NFT-Wrapper">
                <div className="NFT-Image">
                    <img className="NFT-Image-Selector" src={Image} alt="NFT Image"></img>
                </div>
                <div className="NFT-Title">
                    <p className="NFT-Title-Text">{Title}</p>
                </div>
                <div className="NFT-Description">
                    <p className="NFT-Description-Text">{Description}</p>
                </div>
                <div className="NFT-Creator">
                    <img className="NFT-Profile-Selector" src={Profile} alt="Profile Image"></img><span className="NFT-Spacer"></span><p className="NFT-Creator-Text">{Creator}</p>
                </div>
                <div className="NFT-Price">
                    <p className="NFT-Price-Text">{Price}</p>
                </div>
            </div>
        </div>
    )

}

export default NFT