import React from 'react'
import logo from "../images/logo1.png";
import { Link } from "react-router-dom";
import end from "../images/end.png";
import prof from "../images/chef.jpg";
import Siderbar from './Siderbar';

export default function InnerPage() {
  return (
    <div className="container">
          <Siderbar/>

           <div className="content-area">
          <div className="row mt-5">
            <div className='col-md-12 text-center head'>
              <label> <h2>Start Cooking</h2></label>
           

            </div>
            
            </div>
          </div>
    </div>
  )
}
