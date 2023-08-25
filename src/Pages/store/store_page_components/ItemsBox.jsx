import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
const ItemsBox = ({prod,prod_link}) => {
  return (
        <Box>
          <Box display={'flex'} ml='4' alignItems='center'height={"100%"} >
            <Heading fontSize='2xl' >{prod}</Heading>
            <Box ml='2' fontSize='xs' color='red.600' >
            <NavLink to={`${prod_link}`}>VIEW ALL </NavLink>
            </Box>
            </Box>
        </Box>
  )
}
export default ItemsBox