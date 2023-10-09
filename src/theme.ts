import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFB619',
		},
		secondary: {
			main: '#30345E',
		},
		error: {
			main: red.A400,
		},
		success: {
			light: '#BFF796',
			main: '#7AE550',
			dark: '#3AA428',
		},
		grey: {
			100: '#F9FAFB',
			200: '#F4F6F8',
			300: '#DFE3E8',
			400: '#C4CDD5',
			500: '#919EAB',
			600: '#637381',
			700: '#454F5B',
			800: '#212B36',
			900: '#161C24',
		},
	},
	typography: {
		allVariants: {
			fontFamily: inter.style.fontFamily,
		},
	},
});

export default theme;
