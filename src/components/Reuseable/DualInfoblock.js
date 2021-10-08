import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'
export default function dualInfoblock({ heading }) {
    return (
        <div> 
        <section className="my-4 py-4 bg-theme">
        <div className="container">
        <Heading title={heading}/>
        <div className="row">
        <div className="col-8 mx-auto">
        <p className="lead text-white mb-4"> AWOPIOJWE
ajsklLNNCJ CSOAPXAISX COKSAKCPASCXICJ CAOPXKSXCJ IJEWSCA MKEWIJAEW4
 CIWEK,C
CMKSDCD,.CMDCNOIWHFUBWH  BUIEBHWKLIOFSNLHIOWEF sHUBHAM joshi btn is a good boy in the country he is loyal and hard working boy iin the cpuntery and verty
leorm100

</p>
        </div>
        <div className="col-4">
        <div className="card bg-dark">
  <img src="https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="card-img-top" alt="image goes here"/>
  <div class="card-body">
    <h5 className="card-title text-white">Just Buy</h5>
    <p className="card-text  text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-warning btn-block">{heading}</a>
  </div>
</div>

            
        </div>

        </div>

        </div>

        </section>
            
        </div>
    )
}
