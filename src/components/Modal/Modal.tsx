import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { StyledBox } from "./Modal.styled";

const TransitionModal = ({ showModal, closeModal, children }: any) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <StyledBox>{children}</StyledBox>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionModal;
