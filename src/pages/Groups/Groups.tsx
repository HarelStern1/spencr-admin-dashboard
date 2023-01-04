import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GroupCard from "../../components/GroupCard/GroupCard";
import { colors } from "../../utils/constants";
import { Header, GroupsGrid } from "./Groups.styled";

const Groups = () => {
  const navigate = useNavigate();

  const addGroup = () => {
    navigate("/add-group");
  };

  return (
    <div>
      <Header>
        <Typography fontWeight={600} fontSize="24px" color={colors.grayText}>
          View All Groups
        </Typography>
        <Button onClick={addGroup} variant="contained">
          New Group
        </Button>
      </Header>
      <GroupsGrid>
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </GroupsGrid>
    </div>
  );
};

export default Groups;
