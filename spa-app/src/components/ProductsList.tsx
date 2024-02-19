import {
  AspectRatio,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/joy";
import { useQuery } from "react-query";
import Api from "../api";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Helmet } from "react-helmet-async";

const ProductsList = () => {
  const { data } = useQuery("products", () => Api.getAllProducts());

  return (
    <Container sx={{ py: 4 }} component={"main"}>
      <Helmet>
        <title>{"All Products | Flourish Bakery Co."}</title>
      </Helmet>
      <Stack sx={{ alignItems: "center" }}>
        <Logo />
      </Stack>
      <Divider sx={{ my: 4 }} />
      <Typography level={"h1"} sx={{ pb: 4 }}>
        All Products
      </Typography>
      {!data && (
        <Grid container spacing={4}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Grid xs={12} md={6} key={i}>
              <Card variant={"plain"}>
                <AspectRatio ratio="1.5">
                  <Skeleton />
                </AspectRatio>
                <CardContent>
                  <Typography level={"title-lg"}>
                    <Skeleton width={"50%"} variant={"text"} />
                  </Typography>
                  <Typography level={"body-sm"}>
                    <Skeleton width={"10%"} variant={"text"} />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button disabled>View details</Button>
                  <Button disabled variant={"outlined"}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {data && (
        <Grid container spacing={4}>
          {data.map((product) => (
            <Grid xs={12} md={6} key={product.id}>
              <Card variant={"plain"}>
                <AspectRatio ratio="1.5">
                  <img src={product.imageUrl} loading="lazy" alt="" />
                </AspectRatio>
                <CardContent>
                  <Typography level={"h3"}>{product.name}</Typography>
                  <Typography level={"body-sm"}>
                    {`$${product.price.toFixed(2)}`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size={"lg"}
                    component={NavLink}
                    to={`/product/${product.id}`}
                  >
                    View details
                  </Button>
                  <Button size={"lg"} variant={"outlined"}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductsList;
