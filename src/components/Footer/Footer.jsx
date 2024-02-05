import React from "react";
import { Stack, Typography, Container } from "@mui/material";

export default function Footer() {
    return (
        <Stack
            sx={{
         
                backgroundColor: "#2c3e50",
            }}
        >
            <Container maxWidth="lg"
            >
                <Stack
                    direction={{
                        md: "row",
                        xs: "column",
                    }}
                    sx={{
                        marginY: "8%",
                        justifyContent: "space-around",
                        alignItems: { md: "start", xs: "center" },
                    }}
                >
                    <Stack
                        sx={{
                            flex: 1, mb: { md: 0, xs: 5 }
                        }}
                    >
                        <Typography
                            textAlign="center"
                            sx={{
                                color: "white",
                                fontSize: 27,
                                fontWeight: 700,
                            }}
                        >
                            LOCATION
                        </Typography>
                        <Typography
                            textAlign="center"
                            sx={{
                                color: "white",
                                my: 1,
                            }}
                        >
                            2215 John Daniel Drive
                        </Typography>
                        <Typography
                            textAlign="center"
                            sx={{
                                color: "white",
                                my: 1,
                            }}
                        >
                            Clark, MO 65243
                        </Typography>
                    </Stack>
                    <Stack
                        sx={{
                            flex: 1, mb: { md: 0, xs: 5 }
                        }}
                    >
                        <Typography
                            textAlign="center"
                            sx={{
                                color: "white",
                                fontSize: 27,
                                fontWeight: 700,
                            }}
                        >
                            AROUND THE WEB
                        </Typography>
                        <Typography
                            textAlign="center"
                            sx={{
                                color: "white",
                                my: 1,
                            }}
                        >
                            2215 John Daniel Drive
                        </Typography>
                        <Typography
                            textAlign="center"
                            sx={{
                                color: "white",
                                my: 1,
                            }}
                        >
                            Clark, MO 65243
                        </Typography>
                    </Stack>
                    <Stack
                        sx={{
                            flex: 1
                        }}
                    >
                        <Typography
                            textAlign="center"
                            sx={{
                                color: "white",
                                fontSize: 27,
                                fontWeight: 700,
                            }}
                        >
                            ABOUT FREELANCER
                        </Typography>
                        <Typography
                            textAlign="center"
                            sx={{
                                color: "white",
                                my: 1,
                            }}
                        >
                            Freelance is a free to use, licensed Bootstrap theme created by
                            Route
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
            <Stack>
                <Typography
                    textAlign="center"
                    sx={{
                        backgroundColor: "#1A252F",
                        color: "white",
                        py: 3,
                    }}
                >
                    Copyright © Your Website 2021
                </Typography>
            </Stack>
        </Stack>
    );
}
