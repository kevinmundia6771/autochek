import { Box, Typography } from "@mui/material";
import { Navigation, Swiper, SwiperSlide, Thumbs, Zoom } from "@utils/slider";
import { CarMediaList } from "@utils/types";
import Image from "next/image";
import React, { CSSProperties } from "react";
import VideoPlayer from "./VideoPayer";

interface Props {
  media: CarMediaList[];
  thumbsSwiper: any;
}
const MainSwiperImage = ({ media, thumbsSwiper }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 5,
        border: "1px solid #DFE3E8",
      }}
    >
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
          } as CSSProperties
        }
        modules={[Navigation, Thumbs, Zoom]}
        navigation
        loop
        zoom={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={(swiper) => {
          // Pause the video of the previous slide
          const previousSlideIndex = swiper.previousIndex;
          const previousSlideVideo = document.querySelector(
            `.swiper-slide[data-swiper-slide-index="${previousSlideIndex}"] video`
          ) as HTMLVideoElement | null;

          if (previousSlideVideo && !previousSlideVideo.paused) {
            previousSlideVideo.pause();
          } else {
            previousSlideVideo?.play();
          }
        }}
      >
        {media?.map((car) => (
          <SwiperSlide
            key={`product-gallery-${car.id}`}
            className="flex justify-center items-center"
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 450,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {car.type === "image/jpeg" ||
              car.type === "image/webp" ||
              car.type === "image" ? (
                <Image
                  src={car.url}
                  alt={`car image ${car.id}`}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              ) : car.type === "video/mp4" ? (
                <VideoPlayer src={car.url} />
              ) : (
                <Typography>Unsupported Media</Typography>
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MainSwiperImage;
