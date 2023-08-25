import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import HeroSection from '../FitnessPageComponents/heroSection';
import ImageSwiper from '../FitnessPageComponents/swiper';
import ClassesCard from '../FitnessPageComponents/classes';
const Body = () => {
  return (
    <>
    <HeroSection />
    <ClassesCard />
    </>
              
  )
}

export default Body;