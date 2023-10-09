import CarCard from '@components/CarCard';
import Iconify from '@components/Iconify';
import SectionHeading from '@components/SectionHeading';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { Car } from '@utils/types';
import Link from 'next/link';
import React from 'react';

interface Props {
	cars: Car[];
}

const PopularCars = ({ cars }: Props) => {
	const firstSixCars = cars.slice(0, 6);
	return (
		<Container sx={{ py: 8 }}>
			<SectionHeading
				title={'Popular Cars'}
				subtitle="Checkout our car collection"
			/>

			<Grid container spacing={2} mt={4}>
				{firstSixCars.map((car) => {
					return (
						<Grid item xs={12} md={6} lg={4} key={car.id}>
							<CarCard car={car} />
						</Grid>
					);
				})}
			</Grid>

			<Stack
				direction={'row'}
				alignItems={'center'}
				justifyContent={'flex-end'}
				mt={4}
			>
				<Link href="/cars">
					<Typography
						variant="body1"
						fontSize={'small'}
						fontWeight={700}
						color={'secondary.main'}
					>
						View more cars
					</Typography>
				</Link>
				<Iconify
					icon="ic:round-keyboard-double-arrow-right"
					size={20}
					sx={{ color: 'primary.main' }}
				/>
			</Stack>
		</Container>
	);
};

export default PopularCars;
