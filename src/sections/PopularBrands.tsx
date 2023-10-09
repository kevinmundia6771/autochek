import BrandCard from '@components/BrandCard';
import Iconify from '@components/Iconify';
import SectionHeading from '@components/SectionHeading';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { BrandProps } from '@utils/types';
import Link from 'next/link';

interface Props {
	brands: BrandProps[];
}

const PopularBrands = ({ brands }: Props) => {
	return (
		<Container sx={{ py: 8 }}>
			<Box py={5}>
				<SectionHeading
					title={'Popular Brands'}
					subtitle="Our car brand collection"
				/>
			</Box>

			<Grid container spacing={3}>
				{brands.map((brand) => (
					<Grid item xs={6} md={2.4} key={brand.id}>
						<BrandCard
							name={brand.name}
							imageUrl={brand.imageUrl}
						/>
					</Grid>
				))}
			</Grid>

			{/* <Stack
				direction={'row'}
				alignItems={'center'}
				justifyContent={'flex-end'}
				mt={4}
			>
				<Link href="/">
					<Typography
						variant="body1"
						fontSize={'small'}
						fontWeight={700}
						color={'secondary.main'}
					>
						View more brands
					</Typography>
				</Link>
				<Iconify
					icon="ic:round-keyboard-double-arrow-right"
					size={20}
					sx={{ color: 'primary.main' }}
				/>
			</Stack> */}
		</Container>
	);
};

export default PopularBrands;
