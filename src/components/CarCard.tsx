import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { Car } from '@utils/types';
import React, { ReactNode } from 'react';
import Iconify from './Iconify';
import Link from 'next/link';

interface Props {
	car: Car;
}
// Partial automatically sets every property in the interface to optionals
const CarCard = ({ car }: Props) => {
	const {
		title,
		imageUrl,
		year,
		mileage,
		mileageUnit,
		marketplacePrice,
		transmission,
		sellingCondition,
		ccMeasurement,
		id,
	} = car;
	return (
		<Link href={`/cars/${id}`}>
			<Stack
				borderRadius={3}
				overflow={'hidden'}
				spacing={2}
				pb={2}
				border={'1px solid #DFE3E8'}
				sx={{
					boxShadow: 'rgba(196, 205, 213,0.5) 0px 8px 30px ',
				}}
			>
				<Box
					component={'img'}
					alt={title}
					width={'100%'}
					height={200}
					src={imageUrl}
					sx={{ objectFit: 'cover' }}
				/>
				<Stack px={2} spacing={1}>
					<CustomChip
						icon="heroicons:calendar-solid"
						text={String(year)}
					/>

					<Typography
						variant="h1"
						fontSize={18}
						fontWeight={600}
						letterSpacing={-1}
						py={1}
						sx={{
							display: '-webkit-box',
							textOverflow: 'ellipsis',
							overflow: 'hidden',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: 1,
						}}
					>
						{title}
					</Typography>

					<Stack
						direction={'row'}
						spacing={1}
						alignItems={'baseline'}
						py={2}
					>
						<Typography
							variant="body1"
							fontSize={'small'}
							fontWeight={700}
							color={'success.dark'}
						>
							Ksh.
						</Typography>

						<Typography
							variant="h1"
							fontSize={18}
							fontWeight={600}
							letterSpacing={-1}
							sx={{
								display: '-webkit-box',
								textOverflow: 'ellipsis',
								overflow: 'hidden',
								WebkitBoxOrient: 'vertical',
								WebkitLineClamp: 1,
							}}
						>
							{marketplacePrice.toLocaleString('en-US')}
						</Typography>
					</Stack>

					<Stack direction={'row'} spacing={2}>
						<CustomChip text={sellingCondition} />
						<CustomChip text={`${mileage} ${mileageUnit}`} />
						<CustomChip text={`${ccMeasurement} CC`} />
						<CustomChip text={transmission} />
					</Stack>
				</Stack>
			</Stack>
		</Link>
	);
};

function CustomChip({ icon, text }: { icon?: string; text: string }) {
	return (
		<Stack
			spacing={1}
			direction={'row'}
			alignItems={'center'}
			justifyContent={'center'}
			sx={{
				border: '0.5px solid #DFE3E8',
				width: 'fit-content',
				px: 1,
				py: 0.3,
				borderRadius: 1.5,
				bgcolor: 'grey.100',
			}}
		>
			{icon && (
				<Iconify icon={icon} size={18} sx={{ color: 'grey.600' }} />
			)}
			<Typography variant="body1" fontSize={'12px'} fontWeight={600}>
				{text}
			</Typography>
		</Stack>
	);
}

export default CarCard;
