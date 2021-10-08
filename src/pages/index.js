import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import DualInfoblock from '../components/Reuseable/DualInfoblock'
import Cart from '../components/cart/cart'

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
      title=""
      subtitle=""
      heroclass="hero-background"   />

      <Infoblock heading="About Us" />
      <Cart Courses={data.Courses}/>
      <DualInfoblock heading="Our Products" />
  </Layout>
)

export const query= graphql`
{
  img:file(relativePath:{eq:"heromain.png"}){
  
  childImageSharp{
  
  fluid {
  
    ...GatsbyImageSharpFluid_tracedSVG
  }
}
}
  
    Courses: allContentfulCourse{
     edges{
    node{
    
    id
    title
    price
    category
    description{
    description
    }
      image {
        fixed(width:200 ,height:120){
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
    }
      
    }
    
  }
`



export default IndexPage
