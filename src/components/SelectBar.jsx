import React from 'react'
import { Link } from 'react-router'

export default function SelectBar() {
  return (
    <div className="w-100 py-3 bg-light d-flex justify-content-center align-items-center">
      <Link to="/eligible" className="btn btn-md btn-outline-success mx-4">
        Eligible
      </Link>
      <Link to="/ineligible" className="btn btn-md btn-outline-danger mx-4">
        Ineligible
      </Link>
    </div>
  )
}
