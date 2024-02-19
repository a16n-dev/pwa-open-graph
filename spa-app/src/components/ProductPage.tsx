import { NavLink, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Api from "../api";
import {
  AspectRatio,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import Logo from "./Logo";
import { Helmet } from "react-helmet-async";

interface ProductPageProps {}

const ProductPage = ({}: ProductPageProps) => {
  const { id } = useParams();

  const { data } = useQuery(["products", id], () => Api.getProductById(id!));

  return (
    <Container sx={{ py: 4 }}>
      <Stack sx={{ alignItems: "center" }}>
        <Logo />
      </Stack>
      <Divider sx={{ my: 4 }} />
      {data && (
        <>
          <Helmet>
            <title>{`${data.name} | Flourish Bakery Co.`}</title>
          </Helmet>
          <Breadcrumbs sx={{ pb: 4 }}>
            <Link component={NavLink} to={"/products"} color="neutral">
              {"Products"}
            </Link>
            <Typography color={"primary"}>{data.name}</Typography>
          </Breadcrumbs>
          <Grid container spacing={4}>
            <Grid xs={12} md={6}>
              <AspectRatio ratio="1.25">
                <Box
                  component={"img"}
                  sx={{ borderRadius: "md" }}
                  src={data.imageUrl}
                  alt={data.name}
                />
              </AspectRatio>
            </Grid>
            <Grid xs={12} md={6}>
              <Stack sx={{ pt: 2 }} spacing={4}>
                <Stack>
                  <Typography level={"h1"}>{data.name}</Typography>
                  <Typography level={"title-lg"}>
                    {`$${data.price.toFixed(2)} ea`}
                  </Typography>
                </Stack>
                <Typography level={"body-lg"}>{data.description}</Typography>
                <Button
                  variant={"outlined"}
                  sx={{ alignSelf: "flex-start" }}
                  size={"lg"}
                >
                  Add to cart
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ProductPage;
