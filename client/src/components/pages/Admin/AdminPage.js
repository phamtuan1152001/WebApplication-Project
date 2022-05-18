import React from 'react'
import { Link } from 'react-router-dom'
import "./AdminPage.css";
function AdminPage() {
  return (
    <>
      <div className='container'>
        <h1 className='text-center'>Roles of Admin</h1>
        <div className='container_link'>
          <Link to="/addBestSeller" className="btn btn-outline-dark">
            Add Best Seller Items
          </Link>
          <Link to="/displayBestSeller" className="btn btn-outline-dark">
            Display Best Seller Items
          </Link>
          <Link to="/addTrendProduct" className="btn btn-outline-dark">
            Add Trend Product Items
          </Link>
          <Link to="/displayTrendProduct" className="btn btn-outline-dark">
            Display Trend Product Items
          </Link>
        </div>
      </div>
    </>
  )
}

export default AdminPage