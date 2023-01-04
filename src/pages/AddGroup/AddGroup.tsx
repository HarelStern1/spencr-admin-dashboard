import { Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { colors } from "../../utils/constants";
import {
  AddGroupGrid,
  Form,
  Header,
  HiddenInput,
  ImagesContainer,
  StyledTextField,
} from "./AddGroup.styled";

const AddGroup = () => {
  const hiddenFileInput = useRef<any>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleUplaodImage = () => {
    hiddenFileInput.current.click();
  };

  const onImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setImages((prev) => [...prev, URL.createObjectURL(e.target.files[0])]);
    }
  };

  return (
    <div>
      <Header>
        <Typography fontWeight={600} fontSize="24px" color={colors.grayText}>
          Add New Group
        </Typography>
        <Button variant="contained">Publish</Button>
      </Header>

      <AddGroupGrid>
        <Form>
          <Typography fontWeight={600} fontSize="18px" color={colors.grayText} marginBottom="20px">
            Product Information
          </Typography>
          <StyledTextField label="Name" size="small" margin="normal" sx={{ marginRight: "20px" }} />
          <StyledTextField label="Category" size="small" margin="normal" />
          <StyledTextField
            label="Brand"
            size="small"
            margin="normal"
            sx={{ marginRight: "20px" }}
          />
          <StyledTextField label="Seller" size="small" margin="normal" />
          <StyledTextField label="In stock" size="small" margin="normal" sx={{ width: "98%" }} />
          <StyledTextField
            label="Original price"
            size="small"
            margin="normal"
            sx={{ width: "98%" }}
          />
          <StyledTextField
            label="Price after discount"
            size="small"
            margin="normal"
            sx={{ width: "98%" }}
          />
          <TextField
            label="Description"
            size="small"
            margin="normal"
            sx={{ width: "98%" }}
            multiline
            minRows={4}
          />
        </Form>
        <div>
          <Form>
            <Header>
              <Typography
                fontWeight={600}
                fontSize="18px"
                color={colors.grayText}
                marginBottom="20px"
              >
                Product Images
              </Typography>
              <HiddenInput type="file" ref={hiddenFileInput} onChange={onImageChange} />
              <Button variant="outlined" onClick={handleUplaodImage}>
                Upload Image
              </Button>
            </Header>
            <ImagesContainer>
              {images.map((img, idx) => (
                <img key={idx} src={img} />
              ))}
            </ImagesContainer>
          </Form>
          <Form style={{ marginTop: "30px" }}>
            <Typography
              fontWeight={600}
              fontSize="18px"
              color={colors.grayText}
              marginBottom="20px"
            >
              Group Information
            </Typography>
            <StyledTextField label="Target" size="small" margin="normal" sx={{ width: "98%" }} />
            <StyledTextField
              label="Should display"
              size="small"
              margin="normal"
              sx={{ width: "98%" }}
            />
          </Form>
        </div>
      </AddGroupGrid>
    </div>
  );
};

export default AddGroup;