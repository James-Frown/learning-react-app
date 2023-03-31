import React from "react"
import './NFT-Page-Style.css'
import NFT from './NFT-Card'


const NFTpage = () => {

    return (
        <div className="NFT-Page">
            <div className="NFT-Page-Wrapper">
                <div className="NFT-Page-Heading">
                    <h1>NFT Collection</h1>
                </div>
                <div className="NFT-Page-Collection">
                    <NFT
                        Image="https://loremflickr.com/200/200?random=1"
                        Title="Me-Casss-O"
                        Description="A playfull Picasso worth image"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=1"
                        Price="100.00" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=2"
                        Title="Me-Casss-O"
                        Description="A playfull Picasso worth image"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=2"
                        Price="100.00" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=3"
                        Title="Me-Casss-O"
                        Description="A playfull Picasso worth image"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=3"
                        Price="100.00" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=4"
                        Title="Me-Casss-O"
                        Description="A playfull Picasso worth image"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=4"
                        Price="100.00" />
                </div>
            </div>
        </div>
    )

}

export default NFTpage