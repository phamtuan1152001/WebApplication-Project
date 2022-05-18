import React from 'react'

function CreateProduct() {
  return (
    <>
        <h3 className='mt-2 mb-1'>Creating Best Sellers</h3>
        <form className='m-1'>
            <div className="form-group">
                <label htmlFor="product-name">Product name:</label>
                <input type="text" className="form-control" id="product-name" placeholder="Enter product name" />
            </div>
            <div className="form-group">
                <label htmlFor="product-price">Product price:</label>
                <input type="text" className="form-control" id="product-price" placeholder="Enter product price" />
            </div>
            <div className="form-group">
                <label htmlFor="product-price">Product price:</label>
                <input type="text" className="form-control" id="product-price" placeholder="Enter product price" />
            </div>
            <div className="form-group">
                <label htmlFor="product-image">Product image:</label>
                <input type="text" className="form-control" id="product-image" placeholder="Enter product price" />
            </div>
            <div className="form-group">
                <label htmlFor="product-price">Product category:</label>
                <input type="text" className="form-control" id="product-price" placeholder="Enter product price" />
            </div>
            <select className="form-control form-control-lg">
                <option>men's clothing</option>
                <option>woman's clothing</option>
                <option>jewelery</option>
            </select>
            <div className='form-group'>
                <input className='btn btn-outline-dark mt-5' type="submit" value="Submit"/>
            </div>
        </form>
    </>
  )
}

export default CreateProduct