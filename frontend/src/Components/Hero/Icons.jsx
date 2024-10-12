import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const Icons = () => {
    const theme = useTheme()
  return (
    <Container sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}>
      <Stack direction={"row"}
      
        flexWrap={'wrap'}
        >
        <MyBox
        
          icon={<LocalShippingOutlinedIcon sx={{fontSize:'40px'}} />}
          tittle={"Fast Delivery"}
          subtitle={"Start from $10"}
        />
        <MyBox
          icon={<PaidOutlinedIcon  sx={{fontSize:'40px'}} />}
          tittle={"Money Guarantee"}
          subtitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon sx={{fontSize:'40px'}} />}
          tittle={"365 Days"}
          subtitle={"For free return"}
        />
        <MyBox
          icon={<PaymentOutlinedIcon sx={{fontSize:'40px'}} />}
          tittle={"Payment"}
          subtitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default Icons;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, tittle, subtitle }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        gap: 3,
        py:1.7,
        my:2,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",

      }}
    >
        {
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
      {icon}
      <Box>
        <Typography sx={{fontWeight:'bold'}}>{tittle}</Typography>
        <Typography sx={{fontSize:'13px', color: theme.palette.text.secondary}}>{subtitle}</Typography>
      </Box>
    </Box>
  );
};
