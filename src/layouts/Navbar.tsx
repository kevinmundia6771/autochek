import Iconify from '@components/Iconify';
import {
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	Stack,
	TextField,
	Toolbar,
	Typography,
	styled,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Stack
				direction={'row'}
				justifyContent={'space-between'}
				bgcolor={'secondary.main'}
				px={2}
				sx={{ display: { xs: 'none', md: 'flex' } }}
			>
				<Stack direction={'row'} alignItems={'center'}>
					<IconButton>
						<Iconify
							icon="fluent:cart-16-filled"
							size={24}
							sx={{ color: '#fff' }}
						/>
					</IconButton>
					<Typography
						variant="body1"
						fontSize={'small'}
						color={'white'}
					>
						Top Deals and discounts
					</Typography>
				</Stack>

				{/* elements to the right */}
				<Stack
					direction={'row'}
					alignItems={'center'}
					spacing={3}
					divider={
						<Divider
							orientation="vertical"
							sx={{ height: '15px', bgcolor: 'white' }}
						/>
					}
				>
					<MiniNavItem
						icon="material-symbols:location-on"
						text="Select location"
					/>
					<MiniNavItem icon="mdi:lorry" text="Track Order" />
					<MiniNavItem
						icon="material-symbols:call"
						text="+254 111 034 300"
					/>
					<MiniNavItem icon="basil:login-solid" text="Login" />
					<MiniNavItem
						icon="heroicons-outline:logout"
						text="Register"
					/>
				</Stack>
			</Stack>
			<Container>
				<Stack
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}
					spacing={2}
					py={2}
				>
					{/* logo */}
					<Box
						flex={1}
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Link href={'/'}>
							<Box
								sx={{
									width: '150px',
									height: '50px',
									position: 'relative',
								}}
							>
								<Box
									component={Image}
									src={'/assets/images/logo.webp'}
									alt="Autochek logo"
									fill
									sx={{
										position: 'absolute',
										objectFit: 'contain',
										objectPosition: 'center',
										cursor: 'pointer',
									}}
								/>
							</Box>
						</Link>
					</Box>

					{/* seacrh */}
					<Stack
						direction={'row'}
						alignItems={'center'}
						justifyContent={'center'}
						spacing={2}
						flex={3}
						sx={{ display: { xs: 'none', sm: 'flex' } }}
					>
						<TextField
							fullWidth
							variant="outlined"
							placeholder="Search"
							size="small"
						/>
						<Button
							variant="contained"
							size="large"
							sx={{
								textTransform: 'capitalize',
								boxShadow: 'none',
							}}
						>
							Search
						</Button>
					</Stack>

					{/* cart */}

					<Box
						flex={1}
						display={'flex'}
						justifyContent={'center'}
						sx={{
							justifyContent: { xs: 'flex-end', sm: 'center' },
						}}
					>
						<Box
							bgcolor={'secondary.main'}
							width={45}
							height={45}
							display={'flex'}
							justifyContent={'center'}
							borderRadius={1}
						>
							<IconButton>
								<Iconify
									icon={'ion:car-sport'}
									size={24}
									sx={{ color: '#fff' }}
								/>
							</IconButton>
						</Box>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

function MiniNavItem({ icon, text }: { icon: string; text: string }) {
	return (
		<Stack
			direction={'row'}
			alignItems={'center'}
			px={2}
			sx={{
				':hover': {
					cursor: 'pointer',
				},
			}}
		>
			<IconButton>
				<Iconify icon={icon} size={18} sx={{ color: '#fff' }} />
			</IconButton>
			<Typography variant="body1" fontSize={'small'} color={'white'}>
				{text}
			</Typography>
		</Stack>
	);
}

export default Navbar;
