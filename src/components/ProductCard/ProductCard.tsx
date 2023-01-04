import { IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { BottomFlex, CardContainer, CardImage, CardWrapper } from "./ProductCard.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ProductCard: FC = () => {
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
            Consectetur exercitation consequat qui elit ullamco veniam commodo. Reprehenderit
          </Typography>
          <BottomFlex>
            <Typography>$4100</Typography>
            <div>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </div>
          </BottomFlex>
        </div>
      </CardContainer>
    </CardWrapper>
  );
};

export default ProductCard;
