import React from 'react'
import './App.css'

import NFT from './components/NFT-Card'

const App = () => {

  return (
    <div className="App">
      <NFT Image="https://loremflickr.com/200/200?random=1" Title="Me-Casss-O" Description="A playfull Picasso worth image" Creator="Dayy-Driver" Profile="https://loremflickr.com/30/30/?random=1" Price="$10.00" />
    </div>
  )
}

export default App
