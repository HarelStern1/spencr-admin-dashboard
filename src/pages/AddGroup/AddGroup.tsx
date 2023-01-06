import { Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { colors } from "../../utils/constants";
import {
  AddGroupGrid,
  FieldsWrapper,
  Form,
  Header,
  HiddenInput,
  ImagePlaceholder,
  ImagesContainer,
  ImagesHeader,
  TextFieldContainer,
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
        <Form area="product" fit>
          <Typography fontWeight={600} fontSize="18px" color={colors.grayText} marginBottom="20px">
            Product Information
          </Typography>
          <FieldsWrapper>
            <TextFieldContainer>
              <TextField label="Name" size="small" margin="normal" fullWidth />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextField label="Category" size="small" margin="normal" fullWidth />
            </TextFieldContainer>
          </FieldsWrapper>
          <FieldsWrapper>
            <TextFieldContainer>
              <TextField label="Brand" size="small" margin="normal" fullWidth />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextField label="Seller" size="small" margin="normal" fullWidth />
            </TextFieldContainer>
          </FieldsWrapper>
          <TextField label="In stock" size="small" margin="normal" fullWidth />
          <TextField label="Original price" size="small" margin="normal" fullWidth />
          <TextField label="Price after discount" size="small" margin="normal" fullWidth />
          <TextField
            label="Description"
            size="small"
            margin="normal"
            fullWidth
            multiline
            minRows={4}
          />
        </Form>
        <Form area="group">
          <Typography fontWeight={600} fontSize="18px" color={colors.grayText} marginBottom="20px">
            Group Information
          </Typography>
          <TextField label="Target" size="small" margin="normal" fullWidth />
          <TextField label="Should display" size="small" margin="normal" fullWidth />
        </Form>
        <Form area="images">
          <ImagesHeader>
            <Typography fontWeight={600} fontSize="18px" color={colors.grayText}>
              Product Images
            </Typography>
            <HiddenInput type="file" ref={hiddenFileInput} onChange={onImageChange} />
            <Button variant="outlined" onClick={handleUplaodImage}>
              Upload Image
            </Button>
          </ImagesHeader>
          <ImagesContainer>
            {images.length === 0 ? (
              <ImagePlaceholder>
                <Typography>Images will be shown here</Typography>
              </ImagePlaceholder>
            ) : (
              <div>
                {images.map((img, idx) => (
                  <img key={idx} src={img} />
                ))}
              </div>
            )}
          </ImagesContainer>
        </Form>
      </AddGroupGrid>
    </div>
  );
};

export default AddGroup;
