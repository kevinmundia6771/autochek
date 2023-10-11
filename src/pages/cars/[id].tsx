import CarouselThumbs from "@components/CarouselThumbs";
import Iconify from "@components/Iconify";
import MainSwiperImage from "@components/MainSwiperImage";
import RootLayout from "@layouts/RootLayout";
import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { baseUrl } from "@utils/constants";
import { Car, CarMedia } from "@utils/types";
import { GetServerSideProps } from "next";
import { title } from "process";
import { useState } from "react";

interface ICarProps {
  media: CarMedia;
  car: Car;
}

export default function CarDetails({ media, car }: ICarProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <RootLayout>
      <Container sx={{ py: 8, mx: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6} marginLeft={1}>
            <Stack sx={{ maxWidth: { xs: "100%", md: "sm" } }}>
              <MainSwiperImage
                media={media.carMediaList}
                thumbsSwiper={thumbsSwiper}
              />
              <Stack sx={{ display: { xs: "none", md: "flex" } }}>
                <CarouselThumbs
                  media={media.carMediaList}
                  setThumbSwiper={setThumbsSwiper}
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} marginLeft={1}>
            <Box>
              <Stack
                direction={"row"}
                sx={{
                  p: 2,
                }}
                spacing={2}
              >
                {" "}
                <Stack direction={"row"} spacing={2}>
                  <CustomChip icon="mdi:ferry" text={car.sellingCondition} />
                  <CustomChip
                    icon="fa:road"
                    text={`${car.mileage} ${car.mileageUnit}`}
                  />
                  <CustomChip
                    icon="fluent:transmission-24-regular"
                    text={car.transmission}
                  />
                  <CustomChip icon="arcticons:mileage" text={car.fuelType} />
                </Stack>
              </Stack>

              <Stack px={2} spacing={1}>
                <Stack direction={"row"} spacing={1} alignItems={"baseline"}>
                  <Typography
                    variant="body1"
                    fontSize={"small"}
                    fontWeight={700}
                    color={"dark"}
                  >
                    Prices start at :
                  </Typography>

                  <Typography
                    variant="h1"
                    fontSize={18}
                    fontWeight={600}
                    letterSpacing={-1}
                    sx={{
                      display: "-webkit-box",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                    }}
                  >
                    {car.marketplacePrice.toLocaleString()}
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"baseline"}>
                  <Typography
                    variant="body1"
                    fontSize={"small"}
                    fontWeight={700}
                    color={"dark"}
                  >
                    Mileage:
                  </Typography>

                  <Typography
                    variant="h1"
                    fontSize={18}
                    fontWeight={600}
                    letterSpacing={-1}
                    sx={{
                      display: "-webkit-box",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                    }}
                  >
                    {car.mileage} KM
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"baseline"}>
                  <Typography
                    variant="body1"
                    fontSize={"small"}
                    fontWeight={700}
                    color={"dark"}
                  >
                    Condition:
                  </Typography>

                  <Typography
                    variant="h1"
                    fontSize={18}
                    fontWeight={600}
                    letterSpacing={-1}
                    sx={{
                      display: "-webkit-box",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                    }}
                  >
                    {car.sellingCondition}
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems={"baseline"}>
                  <Typography
                    variant="body1"
                    fontSize={"small"}
                    fontWeight={700}
                    color={"dark"}
                  >
                    Year:
                  </Typography>

                  <Typography
                    variant="h1"
                    fontSize={18}
                    fontWeight={600}
                    letterSpacing={-1}
                    sx={{
                      display: "-webkit-box",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                    }}
                  >
                    {car.year}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const resp = await fetch(`${baseUrl}/car/${params?.id}`);
  // console.log(await resp.json()); // Log the fetched data
  const car = await resp.json();

  const mediaResp = await fetch(`${baseUrl}/car_media?carId=${params?.id}`);
  const media: CarMedia = await mediaResp.json();

  return {
    props: {
      media,
      car,
    },
  };
};
function CustomChip({ icon, text }: { icon?: string; text: string }) {
  return (
    <Stack
      spacing={1}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        border: "0.5px solid #FEB519",
        width: "fit-content",
        px: 1,
        py: 0.3,
        borderRadius: 1.5,
        bgcolor: "grey.100",
      }}
    >
      {icon && <Iconify icon={icon} size={18} sx={{ color: "dark.600" }} />}
      <Typography variant="body1" fontSize={"12px"} fontWeight={600}>
        {text}
      </Typography>
    </Stack>
  );
}
