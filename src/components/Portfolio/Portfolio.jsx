import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Title from '../Title/Title'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import CustomModal from '../CustomModal/CustomModal'


export default function Portfolio() {
    return (
        <Stack sx={{ py: 4 }}>
            <Container maxWidth='xl '>
                <Title title={'portfolio component'} color='#2c3e50' />
                <Stack
                    direction={{
                        md: "row",
                        xs: "column",
                    }}
                    sx={{
                        my: 1,
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >

                    <Box
                        sx={{
                            mx: 3,
                            width: { md: 1 / 3, xs: 1 / 2 } //'250px',
                            , mb: '3%'
                        }}
                    >

                        <CustomModal
                            modalButton={
                                <img src={img1} style={{ width: '100%', borderRadius: '5px' }} />
                            }
                            img={img1} />
                    </Box>
                    <Box
                        sx={{
                            mx: 3,
                            width: { md: 1 / 3, xs: 1 / 2 } //'250px',
                            , mb: '3%'
                        }}
                    >

                        <CustomModal
                            modalButton={
                                <img src={img2} style={{ width: '100%', borderRadius: '5px' }} />
                            }
                            img={img2} />
                    </Box>
                    <Box
                        sx={{
                            mx: 3,
                            width: { md: 1 / 3, xs: 1 / 2 } //'250px',
                            , mb: '3%'
                        }}
                    >

                        <CustomModal
                            modalButton={
                                <img src={img3} style={{ width: '100%', borderRadius: '5px' }} />
                            }
                            img={img3} />
                    </Box>


                </Stack>
                <Stack
                    direction={{
                        md: "row",
                        xs: "column",
                    }}
                    sx={{
                        my: 1,
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >

                    <Box
                        sx={{
                            mx: 3,
                            width: { md: 1 / 3, xs: 1 / 2 } //'250px',
                            , mb: '3%'
                        }}
                    >

                        <CustomModal
                            modalButton={
                                <img src={img1} style={{ width: '100%', borderRadius: '5px' }} />
                            }
                            img={img1} />
                    </Box>
                    <Box
                        sx={{
                            mx: 3,
                            width: { md: 1 / 3, xs: 1 / 2 } //'250px',
                            , mb: '3%'
                        }}
                    >

                        <CustomModal
                            modalButton={
                                <img src={img2} style={{ width: '100%', borderRadius: '5px' }} />
                            }
                            img={img2} />
                    </Box>
                    <Box
                        sx={{
                            mx: 3,
                            width: { md: 1 / 3, xs: 1 / 2 } //'250px',
                            , mb: '3%'
                        }}
                    >

                        <CustomModal
                            modalButton={
                                <img src={img3} style={{ width: '100%', borderRadius: '5px' }} />
                            }
                            img={img3} />
                    </Box>


                </Stack>
            </Container>
        </Stack>
    )
}
