import {
	Box,
	Button,
	Container,
	Stack,
	Typography,
	alpha,
	styled,
} from '@mui/material';
import { Autoplay, Pagination, Swiper, SwiperSlide } from '@utils/slider';
import React, { CSSProperties, ReactNode } from 'react';

const RootSection = styled('section')({
	minHeight: '70vh',
});

const SliderBox = styled(Box)({
	border: '1px solid #637381',
	borderRadius: 15,
	display: 'flex',
	flexDirection: 'column',
	padding: '30px 30px',
	background: alpha('#212B36', 0.5),
	minWidth: '30%',
	gap: 10,
});

const Hero = () => {
	return (
		<RootSection>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				loop
				modules={[Autoplay, Pagination]}
			>
				<SwiperSlide>
					<SliderContents
						imagePath="/assets/images/car1.jpg"
						subtext="Get flat 10% Cashback"
						mainText="New Shipment available"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SliderContents
						imagePath="/assets/images/car2.jpg"
						subtext="Get 30% Discount"
						mainText="The Big Sale"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SliderContents
						imagePath="/assets/images/car3.jpg"
						subtext="November deals"
						mainText="Black Friday deals"
					/>
				</SwiperSlide>
			</Swiper>
		</RootSection>
	);
};

function SliderContents({
	imagePath,
	subtext,
	mainText,
}: {
	imagePath: string;
	subtext: string;
	mainText: string;
}) {
	return (
		<Box
			sx={{
				height: '80svh',
				backgroundImage: `url(${imagePath})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<SliderBox>
				<Typography
					color={'white'}
					variant="h2"
					fontSize={20}
					fontWeight={700}
				>
					{subtext}
				</Typography>
				<Typography
					color={'white'}
					variant="h2"
					fontSize={50}
					fontWeight={700}
					my={8}
				>
					{mainText}
				</Typography>
				<Button
					variant="contained"
					size="large"
					sx={{
						textTransform: 'capitalize',
						boxShadow: 'none',
						width: 'fit-content',
					}}
				>
					Shop now
				</Button>
			</SliderBox>
		</Box>
	);
}

export default Hero;
