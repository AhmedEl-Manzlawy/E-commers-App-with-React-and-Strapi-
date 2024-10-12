import {
  Box,
  CircularProgress,
  Container,
  Dialog,
  Divider,
  Drawer,
  IconButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/Product";
import { AnimatePresence, motion } from "framer-motion";

function MainContent() {
  // const [alignment, setAlignment] = useState("left");
  const [productDetails, setproductDetails] = useState();
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setMyData(newValue);
    }
  };
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProduct = "products?populate=*";
  const [myData, setMyData] = useState(allProduct);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  const menProduct = "products?populate=*&filters[category][$eq]=Men";
  const womenProduct = "products?populate=*&filters[category][$eq]=Women";
  console.log(data);

  if (data) {
    console.log(data.data);
  }
  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ mt: 4 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={2}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected.MuiToggleButton-sizeMedium": {
                border: "1px solid #ff9800 !important",
                color: "#ff9800",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              className="myButton"
              value={allProduct}
              aria-label="left aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={menProduct}
              aria-label="centered"
              sx={{ color: theme.palette.text.primary, mx: "20px !important" }}
            >
              Men category
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={womenProduct}
              aria-label="right aligned"
              sx={{ color: theme.palette.text.primary }}
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          mt={4}
        >
          <AnimatePresence>
            {data.data.map((item) => {
              return (
                <Card
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
                  key={item.id}
                  sx={{
                    my: 3,
                    maxWidth: 345,
                    "&:hover .MuiCardMedia-root ": {
                      scale: 1.1,
                      rotate: "1deg",
                      transition: "1s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      height: "300px ",
                    }}
                    image={`http://localhost:1337/${item.image[0].url}`}
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      alignItems={"flex-start"}
                      justifyContent={"space-between"}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                     
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.productDec}
                    </Typography>
                    <Divider sx={{my:2}} />
                    <Typography color='#ff9800' gutterBottom variant="h5" component="div">
                    EGP {item.price}
                      </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                        handleClickOpen();
                        setproductDetails(item);
                      }}
                      size="small"
                    >
                      <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} />
                      Add To Chart
                    </Button>
                    <Rating
                      precision={0.1}
                      name="read-only"
                      value={item.productRating}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>

        <Dialog
           sx={{ ".MuiPaper-root": { minWidth: { xs: "80%", md: 900 }  }}}
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              "&:hover": {
                color: "#ff9800",
              },
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails productDetails={productDetails} />
        </Dialog>
      </Container>
    );
  }
}

export default MainContent;
