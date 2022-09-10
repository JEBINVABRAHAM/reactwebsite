import React from 'react'
import Siderbar from './Siderbar';

export default function Favorites() {
  return (
    <div className='container'>
        <Siderbar/>
        <div className="content-area">
            <div className='row'>
                <div className='col-md-12 head text-center mt-5'> 
                <label>
                <h2>Favorites</h2>
              </label>

                </div>

            </div>
        </div>
    </div>
  )
}
