import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'


export default class cart extends Component {
    constructor(props){
        super(props)
        this.state= {
            Courses: props.Courses.edges,
            myCourses: props.Courses.edges,
        }
    }
    render() {


        // console.log(this.state.Courses)
        return (
           <section className="py-5">
          <div className="container">
<Heading title="Buy Now" />
<div className="row">
    {this.state.myCourses.map(({node})=>{
return(
    <div 
    key={node.id}
    className="col-11 col-md-6 my-3 d-flex mx-auto">

    <Img fixed={node.image.fixed} />
    <div className="flex-grow-1 px-3">
      <div className="d-flex">
      <h6 className="mb-0">{node.title}</h6>
      <h6 className="mb-0 text-success ml-3">₹{node.price}</h6>

      
      </div>
      <p className="text-muted">
          <small>{node.description.description}</small>
          </p>
          <button 
          data-item-id={node.id}
          data-item-name={node.title}
  data-item-price={node.price}
  data-item-url="https://xyz.com"
  data-item-image={node.image.fixed.src}
  
          className="btn btn-warning snipcart-add-item"
          >
          ADD
          </button>
      
    </div>

   
    </div>
)

    })
    
    }
</div>

          </div>


           </section>
        )
    }
}
