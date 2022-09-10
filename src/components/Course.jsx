import React from 'react'
import { useLocation } from "react-router-dom";
import Siderbar from './Siderbar';

export default function Course() {
    const location = useLocation();
  return (
    <div className='container'>
    <Siderbar/>
    <div className="content-area">
    <div className='row'>
                <div className='col-md-12 head text-center mt-5'> 
                <label>
                <h2>Course</h2>
              </label>

                </div>

            </div>
    </div>
</div>
  )
}
