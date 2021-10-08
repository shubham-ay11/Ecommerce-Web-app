import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'

export default function Infoblock({heading}){
    return(

        
        <section className="bg-theme my-5 py-5">

        <div className="container">
<Heading title={heading}/>
<div className="row">
<div className="col-10 col-sm-8 mx-auto text-center">
<p className="lead text-white mb-4"> AWOPIOJWE
ajsklLNNCJ CSOAPXAISX COKSAKCPASCXICJ CAOPXKSXCJ IJEWSCA MKEWIJAEW4
 CIWEK,C
CMKSDCD,.CMDCNOIWHFUBWH  BUIEBHWKLIOFSNLHIOWEF sHUBHAM joshi btn is a good boy in the country he is loyal and hard working boy iin the cpuntery and verty
</p>
<Link to="/about/">
    <button className="btn btn-warning btn-lg">

        {heading}
    </button>
</Link>

</div>

</div>


        </div>



        </section>
    )
}