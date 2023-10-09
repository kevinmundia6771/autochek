import { Box, Typography } from '@mui/material';
import { Navigation, Swiper, SwiperSlide } from '@utils/slider';
import { CarMediaList } from '@utils/types';
import Image from 'next/image';
import React, { CSSProperties } from 'react';

interface Props {
	media: CarMediaList[];
	setThumbSwiper: any;
}
const CarouselThumbs = ({ media, setThumbSwiper }: Props) => {
	return (
		<Box mt={2}>
			<Swiper
				style={
					{
						'--swiper-navigation-color': '#fff',
						'--swiper-navigation-size': '24px',
					} as CSSProperties
				}
				onSwiper={setThumbSwiper}
				spaceBetween={10}
				slidesPerView={5}
				watchSlidesProgress={true}
				freeMode={true}
				observer={true}
				observeParents={true}
				modules={[Navigation]}
				navigation
				loop
			>
				{media.map((car) => (
					<SwiperSlide key={`product-thumb-gallery-${car.id}`}>
						<Box
							sx={{
								position: 'relative',
								width: 100,
								height: 100,
								overflow: 'hidden',
								borderRadius: 2,
								border: '1px solid #DFE3E8',
							}}
						>
							{car.type === 'image/jpeg' ||
							car.type === 'image' ? (
								<Image
									src={car.url}
									alt={`car image ${car.id}`}
									fill
									style={{
										objectFit: 'cover',
										objectPosition: 'center',
									}}
								/>
							) : car.type === 'video/mp4' ? (
								<video
									style={{
										width: '100%',
										height: '100%',
									}}
								>
									<source src={car.url} type="video/mp4" />
									<source src={car.url} type="video/ogg" />
									<source src={car.url} type="video/webm" />
									Your browser does not support the video tag.
								</video>
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

export default CarouselThumbs;
