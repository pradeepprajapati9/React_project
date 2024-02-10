import React, { useEffect } from 'react'
import Homesection from './Component/Homesection'
import { useGlobaleContext } from './Context'
const About = () => {
  const {UpdateAboutPage} = useGlobaleContext();
  useEffect(()=>  UpdateAboutPage(),[])
  return  <Homesection/>
  
}

export default About
