import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import AddIcon from "@mui/icons-material/Add";
import StorefrontIcon from "@mui/icons-material/Storefront";

export const links = [
  {
    text: "Analytics",
    to: "/",
    icon: <DashboardIcon fontSize="medium" sx={{ color: "#fff" }} />,
  },
  {
    text: "Groups",
    to: "/groups",
    icon: <InventoryOutlinedIcon fontSize="medium" sx={{ color: "#fff" }} />,
  },
  {
    text: "Add Group",
    to: "/add-group",
    icon: <AddIcon fontSize="medium" sx={{ color: "#fff" }} />,
  },
  {
    text: "Sellers",
    to: "/sellers",
    icon: <StorefrontIcon fontSize="medium" sx={{ color: "#fff" }} />,
  },
];
