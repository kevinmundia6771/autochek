import CarouselThumbs from "@components/CarouselThumbs";
import MainSwiperImage from "@components/MainSwiperImage";
import RootLayout from "@layouts/RootLayout";
import { Container, Grid, Stack } from "@mui/material";
import { baseUrl } from "@utils/constants";
import { Car, CarMedia } from "@utils/types";
import { GetServerSideProps } from "next";
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
          <Grid xs={6} marginLeft={2}>
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
          <Grid xs={6} marginLeft={2}>
            <Grid xs={6}></Grid>
            <Grid xs={6}></Grid>
          </Grid>
        </Grid>
      </Container>
    </RootLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const resp = await fetch(`${baseUrl}/car/${params?.id}`);
  console.log(await resp.json());
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
