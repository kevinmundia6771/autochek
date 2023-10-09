import { Icon } from '@iconify/react';
import { Box, SxProps } from '@mui/material';

interface Props {
	icon: string;
	sx?: SxProps;
	size: number;
}

const Iconify = ({ icon, sx, size }: Props) => {
	return (
		<Box
			component={Icon}
			icon={icon}
			height={size}
			width={size}
			sx={{ ...sx }}
		/>
	);
};

export default Iconify;
