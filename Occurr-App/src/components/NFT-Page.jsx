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
                        Description="Part Of A Cat Happy Series"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=10"
                        Price="99.99" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=2"
                        Title="Me-Casss-1"
                        Description="Part Of A Cat Happy Series"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=20"
                        Price="89.99" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=3"
                        Title="Me-Casss-2"
                        Description="Part Of A Cat Happy Series"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=30"
                        Price="79.99" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=4"
                        Title="Me-Casss-3"
                        Description="Part Of A Cat Happy Series"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=40"
                        Price="69.99" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=5"
                        Title="Me-Casss-4"
                        Description="Part Of A Cat Happy Series"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=50"
                        Price="59.99" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=6"
                        Title="Me-Casss-5"
                        Description="Part Of A Cat Happy Series"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=60"
                        Price="49.99" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=7"
                        Title="Me-Casss-6"
                        Description="Part Of A Cat Happy Series"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=70"
                        Price="39.99" />
                    <NFT
                        Image="https://loremflickr.com/200/200?random=8"
                        Title="Me-Casss-7"
                        Description="Part Of A Cat Happy Series"
                        Creator="Dayy-Driver"
                        Profile="https://loremflickr.com/30/30/?random=80"
                        Price="29.99" />
                </div>
            </div>
        </div>
    )

}

export default NFTpage