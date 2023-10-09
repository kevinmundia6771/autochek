import { Box, Stack, Typography } from '@mui/material';
import { BrandProps } from '@utils/types';
import Image from 'next/image';
import React from 'react';

const BrandCard = ({ name, imageUrl }: BrandProps) => {
	return (
		<Stack
			spacing={3}
			p={1}
			borderRadius={2}
			py={2}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			sx={{
				boxSizing: 'border-box',
				boxShadow: 'rgba(196, 205, 213,0.2) 0px 5px 15px 0px',
				'&:hover': {
					outline: '1px solid #FFB619',
				},
			}}
		>
			<Box
				sx={{
					width: '60%',
					height: '100px',
					position: 'relative',
				}}
			>
				<Box
					component={'img'}
					src={imageUrl}
					alt="Autochek logo"
					sx={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						objectFit: 'contain',
						objectPosition: 'center',
						cursor: 'pointer',
					}}
				/>
			</Box>

			<Typography variant="h2" fontSize={'1rem'} fontWeight={600}>
				{name}
			</Typography>
		</Stack>
	);
};

export default BrandCard;
