import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import AddIcon from "@mui/icons-material/Add";
import StorefrontIcon from "@mui/icons-material/Storefront";

export const links = [
  {
    text: "Analysis",
    to: "/",
    icon: <DashboardIcon fontSize="medium" sx={{ color: "#fff" }} />,
  },
  {
    text: "Products",
    to: "/products",
    icon: <InventoryOutlinedIcon fontSize="medium" sx={{ color: "#fff" }} />,
  },
  {
    text: "Add Product",
    to: "/add-product",
    icon: <AddIcon fontSize="medium" sx={{ color: "#fff" }} />,
  },
  {
    text: "Sellers",
    to: "/sellers",
    icon: <StorefrontIcon fontSize="medium" sx={{ color: "#fff" }} />,
  },
];
