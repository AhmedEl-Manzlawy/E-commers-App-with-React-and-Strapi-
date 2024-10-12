/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ProductDetails = ({ productDetails }) => {
  // const [alignment, setAlignment] = useState("left");
  const [ selectedImg , setselectedImg]=useState(0);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setselectedImg(newAlignment);
    }
  };

  console.log(productDetails);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: 2.5,

        // border:'2px solid red'
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <img
          src={`http://localhost:1337/${productDetails.image[selectedImg].url}`}
          alt=""
          width={350}
        />
      </Box>
      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {productDetails.title.substr(0, 20)}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${productDetails.price}
        </Typography>
        <Typography variant="body1">
          {productDetails.productDec.substr(0, 110)}
        </Typography>

        <Stack direction={"row"} gap={2} my={2}>
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            onChange={handleAlignment}
            sx={{
              ".Mui-selected": {
                borderRadius: "10px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {productDetails.image.map((img,idx) => {
              return (
                <ToggleButton
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5  ",
                  }}
                  key={img.id}
                  value={idx}
                  aria-label="left aligned"
                >
                  <img
                  onClick={()=>{
                    setselectedImg(idx)
                  }}
                    style={{ borderRadius: 10 }}
                    height={"100%"}
                    width={"100%"}
                    src={`http://localhost:1337/${img.url}`}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
          color="warning"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
