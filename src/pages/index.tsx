import Navbar from '@layouts/Navbar';
import RootLayout from '@layouts/RootLayout';
import Hero from '@sections/Hero';
import PopularBrands from '@sections/PopularBrands';
import PopularCars from '@sections/PopularCars';
import { baseUrl } from '@utils/constants';
import { CarProps, DataProps } from '@utils/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface IBrandProps {
	data: DataProps;
}

interface ICarProps {
	cars: CarProps;
}

type Props = IBrandProps & ICarProps;

export default function Home({ data, cars }: Props) {
	return (
		<RootLayout>
			<Head>
				<title>autochek</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<Hero />
			<PopularBrands brands={data.makeList} />
			<PopularCars cars={cars.result} />
		</RootLayout>
	);
}

// ssr data fetching
export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${baseUrl}/make?popular=true`);
	const data: DataProps = await res.json();

	const carsResp = await fetch(`${baseUrl}/car/search`);
	const cars: CarProps = await carsResp.json();

	return { props: { data, cars } };
};
