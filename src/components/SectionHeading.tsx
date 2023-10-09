import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

interface Props {
	title: string;
	subtitle: string;
}
const SectionHeading = ({ title, subtitle }: Props) => {
	return (
		<Stack
			justifyContent={'center'}
			alignItems={'center'}
			color={'grey.800'}
		>
			<Typography variant="h1" fontSize={30} fontWeight={800}>
				{title}
			</Typography>
			<Typography
				variant="body1"
				fontSize={'small'}
				fontWeight={500}
				color={'grey.500'}
			>
				{subtitle}
			</Typography>
		</Stack>
	);
};

export default SectionHeading;
