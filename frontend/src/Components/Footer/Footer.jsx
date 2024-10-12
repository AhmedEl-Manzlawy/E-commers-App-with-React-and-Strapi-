import { Container, Link, Stack } from "@mui/material";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        bgcolor: "#2B3445",
        // mt: 5,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems={"center"}>
          <Typography color="white" variant="h5">
            E-Commerce Application
          </Typography>
          <Typography color="peru" variant="subtitle1">
            {`${new Date().getFullYear()} | React | E-Commerce | Redux | Stripe | Swipper | Material UI | React Router`}
          </Typography>
          <Typography
            justifyContent={"center"}
            display={"flex"}
            alignItems={"center"}
            color={"HighlightText"}
            variant="h6"
            sx={{ fontSize: 18 }}
          >
            Designed and developed by
            <Link
              href="https://www.linkedin.com/in/ahmed-elmanzlawy/"
              sx={{
                mx: 0.5,
                fontSize: "18px",
                textTransform: "capitalize",
                color: "#ff9800",
                ":hover": { cursor: "pointer" },
                textDecoration: "none",
              }}
              variant="text"
              color="primary"
            >
              Eng / Ahmed EL-Manzlawy
            </Link>
            ©2024
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
