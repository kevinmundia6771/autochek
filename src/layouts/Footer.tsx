import Iconify from "@components/Iconify";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const categories: string[] = ["BMW", "Honda", "Isuzu", "Mazda", "Toyota"];
const links: string[] = [
  "Home",
  "Cars",
  "Contact us",
  "Terms of use",
  "Privacy Policy",
];
const info = [
  { icon: "fluent:location-24-filled", text: "Nairobi" },
  { icon: "fluent:call-16-filled", text: "+254 111 034 300" },
  { icon: "eva:email-fill", text: "autochek1@autocheck.com" },
  { icon: "eva:email-fill", text: "autochek2@autocheck.com" },
];

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "grey.800", py: 5, mt: 5 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={6} lg={3}>
            <Stack spacing={2}>
              <Typography
                variant="h1"
                fontSize={20}
                fontWeight={700}
                color={"primary"}
              >
                Categories
              </Typography>

              <Stack spacing={2}>
                {categories.map((category, index) => {
                  return (
                    <Typography
                      key={`${category + index}`}
                      variant="body1"
                      fontSize={"0.8rem"}
                      fontWeight={500}
                      color={"grey.500"}
                    >
                      {category}
                    </Typography>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} lg={3}>
            <Stack spacing={2}>
              <Typography
                variant="h1"
                fontSize={20}
                fontWeight={700}
                color={"primary"}
              >
                Quick Links
              </Typography>

              <Stack spacing={2}>
                {links.map((category, index) => {
                  return (
                    <Typography
                      key={`${category + index}`}
                      variant="body1"
                      fontSize={"0.8rem"}
                      fontWeight={500}
                      color={"grey.500"}
                    >
                      {category}
                    </Typography>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Stack spacing={2}>
              <Typography
                variant="h1"
                fontSize={20}
                fontWeight={700}
                color={"primary"}
              >
                Get in Touch
              </Typography>

              <Stack spacing={2}>
                {info.map((item, index) => {
                  return (
                    <Stack
                      spacing={1}
                      direction={"row"}
                      alignItems={"center"}
                      key={index}
                    >
                      <Iconify
                        icon={item.icon}
                        size={18}
                        sx={{ color: "white" }}
                      />

                      <Typography
                        variant="body1"
                        fontSize={"0.8rem"}
                        color={"grey.400"}
                        fontWeight={600}
                      >
                        {item.text}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Stack spacing={2}>
              <Typography
                variant="h1"
                fontSize={20}
                fontWeight={700}
                color={"primary"}
              >
                Newsletter
              </Typography>
              <Typography
                variant="body1"
                fontSize={"0.8rem"}
                color={"grey.400"}
                fontWeight={600}
              >
                Free Shipment on your first order
              </Typography>

              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={2}
                flex={3}
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="email"
                  size="small"
                  sx={{
                    input: {
                      color: "white",
                      outline: "1px solid #fff",
                      borderRadius: 1,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "capitalize",
                    boxShadow: "none",
                  }}
                >
                  Go
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
