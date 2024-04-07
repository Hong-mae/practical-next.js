import ProductCard from "@/components/ProductCard";
import graphql from "@/lib/graphql";
import getAllProducts from "@/lib/graphql/queries/getAllProducts";
import { Grid } from "@chakra-ui/react";

export const getStaticProps = async () => {
  const { products } = await graphql.request(getAllProducts);

  return {
    revalidate: 60,
    props: {
      products,
    },
  };
};

const Home = (props: unknown) => {
  return (
    <Grid gridTemplateColumns={"repeat(4, 1fr)"} gap={"5"}>
      {props.products.map((product: unknown) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
};

export default Home;
