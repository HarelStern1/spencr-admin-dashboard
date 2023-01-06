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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => (
          <GroupCard key={idx} />
        ))}
      </GroupsGrid>
    </div>
  );
};

export default Groups;
