import { Button, Container } from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";
import Title from "../Title/Title";

export default function Contact() {
  return (
    <Stack sx={{ py: 4 }}>
      <Container maxWidth="xl ">
        <Title title={"conatct section"} color="#2c3e50" />

        <Stack sx={{ my: 4, alignItems: "center" }}>
          <Stack sx={{ width: { md: "40%", xs: "100%" } }}>
            <input
              placeholder="userName"
              type="text"
              style={{
                width: "30%",
                padding: "10px",
                border: 0,
                borderBottom: ".5px solid rgba(0,0,0,.2)",
                marginBottom: "30px",
                paddingBottom: "20px",
              }}
            />{" "}
          </Stack>{" "}
          <Stack sx={{ width: { md: "40%", xs: "100%" } }}>
            <input
              placeholder="userAge"
              type="number"
              style={{
                width: "30%",
                padding: "10px",
                border: 0,
                borderBottom: ".5px solid rgba(0,0,0,.2)",
                marginBottom: "30px",
                paddingBottom: "20px",
              }}
            />{" "}
          </Stack>{" "}
          <Stack sx={{ width: { md: "40%", xs: "100%" } }}>
            <input
              placeholder="userEmail"
              type="text"
              style={{
                width: "30%",
                padding: "10px",
                border: 0,
                borderBottom: ".5px solid rgba(0,0,0,.2)",
                marginBottom: "30px",
                paddingBottom: "20px",
              }}
            />
          </Stack>
          <Stack sx={{ width: { md: "40%", xs: "100%" } }}>
            <input
              placeholder="userPassword"
              type="text"
              style={{
                width: "100%",
                padding: "10px",
                border: 0,
                borderBottom: ".5px solid rgba(0,0,0,.2)",
                marginBottom: "30px",
                paddingBottom: "20px",
              }}
            />
          </Stack>
          <Stack sx={{ width: { md: "40%", xs: "100%" }}}>
            <button
              style={{
                color: "white",
                background: "#1abc9c",
                bgcolor: "#1abc9c",
                border: 0,
                padding: "10px 20px",
                borderRadius: "10px",
                fontSize: "16px",
                width: "200px",
              }}
            >
              Send Message
            </button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
