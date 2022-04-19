import React from 'react'
import bestsellers from './dataBestSeller'
import './BestSeller.css'
function BestSeller() {
  return (
    <>
        <h1 className='best-seller-title'>Best Seller Products</h1>
        <div className='best-seller-container'>
            {bestsellers.map((bestseller, index) => (
                <div key={index} className='best-seller-list'>
                    <img className='img-best-seller' src={bestseller.img} alt={bestseller.name}/>
                    <h3>{bestseller.name}</h3>
                    <p>{bestseller.price}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default BestSeller;