import { Button, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import { colors } from "../../utils/constants";
import { Header, ProductsGrid } from "./Products.styled";

const Products = () => {
  return (
    <div>
      <Header>
        <Typography fontWeight={600} fontSize="24px" color={colors.grayText}>
          View All Products
        </Typography>
        <Button variant="contained">New Product</Button>
      </Header>
      <ProductsGrid>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsGrid>
    </div>
  );
};

export default Products;
