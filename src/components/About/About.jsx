import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Title from '../Title/Title'

export default function About() {
    return (
        <Stack sx={{py:'13%',
            backgroundColor: '#1abc9c', flex: 1//to fill the remaining height
        }}>
            <Container maxWidth='lg' sx={{ my: 4 }}>
                <Title title={'about component'} color='white' />


                <Stack
                    direction={{
                        md: "row",
                        xs: "column",
                    }}
                    sx={{
                        my:1,
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Typography sx={{mb:{md:0,xs:4},
                        color: "white", mx:'5px'
                    }}> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </Typography>
                    <Typography sx={{
                        color: "white",  mx:'5px'
                    }}> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </Typography>
                </Stack>
            </Container >
        </Stack >
    )
}
