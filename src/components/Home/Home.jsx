import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import homeImg from '../../assets/avataaars.svg'
import Title from '../Title/Title'

export default function Home() {
  return (
    <Stack sx={{py:4, backgroundColor: '#1abc9c', alignItems: 'center',}}>
      <Box sx={{width:'250px' ,mb:4}}>
        <img src={homeImg} style={{width:'100%'}}/>
      </Box>
      <Title title={'start Framework'}
        color={'white'} />
      <Typography
        textAlign="center"
        sx={{
          color: "white",
          my: 1,
        }}
      >
        Graphic Artist - Web Designer - Illustrator
      </Typography>
    </Stack>
  )
}
