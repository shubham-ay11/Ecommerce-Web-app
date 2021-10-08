import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import DualInfoblock from '../components/Reuseable/DualInfoblock'
import TeamPhoto from '../components/About/TeamPhoto'

const AboutPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection 
    img={data.img.childImageSharp.fluid}
      title=""
      subtitle="About us"
      heroclass="about-background"   />
   <DualInfoblock heading="A message from CEO" />
      <Infoblock heading="About Our Vison" />
      <TeamPhoto />
   
  </Layout>
)

export const query= graphql`
{
  img:file(relativePath:{eq:"about.png"}){
  
  childImageSharp{
  
  fluid{
  
    ...GatsbyImageSharpFluid_tracedSVG
  }}}
  }
`



export default AboutPage
