import { Button, IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";
import {
  BottomFlex,
  ButtonsContainer,
  CardContainer,
  CardImage,
  CardWrapper,
} from "./GroupCard.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

const GroupCard: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleEdit = () => {
    navigate("/edit-group/groupId");
  };

  return (
    <CardWrapper>
      <CardContainer>
        <CardImage
          src="https://www.idigital.co.il/files/iphone14/iph14promax_web_hero.jpeg"
          alt="test image"
          height={150}
        />
        <div>
          <Typography margin="10px 0">iPhone 14 Pro</Typography>
          <Typography margin="10px 0">
            Consectetur exercitation consequat qui elit ullamco
          </Typography>
          <BottomFlex>
            <Typography>$4100</Typography>
            <div>
              <IconButton onClick={handleEdit}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={openModal}>
                <DeleteIcon />
              </IconButton>
            </div>
          </BottomFlex>
        </div>
      </CardContainer>

      {/* modal */}
      <Modal showModal={showModal} closeModal={closeModal}>
        <Typography marginBottom="20px">Are you sure you want to delete this group?</Typography>
        <ButtonsContainer>
          <Button color="info" variant="outlined" onClick={closeModal}>
            No, keep
          </Button>
          <Button variant="outlined" color="error">
            Yes, Delete
          </Button>
        </ButtonsContainer>
      </Modal>
    </CardWrapper>
  );
};

export default GroupCard;
