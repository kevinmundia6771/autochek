import CarCard from "@components/CarCard";
import RootLayout from "@layouts/RootLayout";
import { Container, Grid, Pagination, Stack } from "@mui/material";
import { baseUrl } from "@utils/constants";
import { CarProps } from "@utils/types";
import { GetServerSideProps } from "next";
import { useRouter, usePathname } from "next/navigation";

interface ICarProps {
  cars: CarProps;
}

const Cars = ({ cars }: ICarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`${pathname}?page=${value}`);
  };

  return (
    <RootLayout>
      <Container>
        <Grid container spacing={2} mt={4}>
          {cars.result.map((car) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={car.id}>
                <CarCard car={car} />
              </Grid>
            );
          })}
        </Grid>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={5}
        >
          <Pagination
            count={cars.pagination.pageSize}
            page={cars.pagination.currentPage}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Container>
    </RootLayout>
  );
};

export default Cars;

// ssr data fetching
export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  console.log(page);
  const carsResp = await fetch(`${baseUrl}/car/search?page_number=${page}`);
  const cars: CarProps = await carsResp.json();

  return { props: { cars } };
};
