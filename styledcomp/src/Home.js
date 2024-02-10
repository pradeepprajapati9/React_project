import { useEffect } from "react"
import React from 'react';
import Homesection from './Component/Homesection'
import { useGlobaleContext } from './Context'

const Home = () => {
  const { UpdateHomePage } = useGlobaleContext();
  useEffect(() => UpdateHomePage(),[])
  return <Homesection />

}

export default Home
