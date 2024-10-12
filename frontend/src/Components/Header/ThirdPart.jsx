import {
  Close,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";

function ThirdPart() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "250px",
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <WidgetsIcon />
          <Typography sx={{ p: 0, textTransform: "capitalize", mx: 1 }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ ".MuiList-root": { width: "250px" } }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1000px)") && (
        <Stack direction={"row"} alignItems={"center"} gap={3} >
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}
      {useMediaQuery("(max-width:999px)") && (
        <IconButton onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiPaper-root.css-15ena87-MuiPaper-root-MuiDrawer-paper": {
            width: "80%",
          },
          ".MuiPaper-root.css-jq02k7-MuiPaper-root-MuiDrawer-paper": {
            width: "80%",
          },
        }}
      >
        <Box
          sx={{
            mx: "auto",
            width: "400px",
            position: "relative",
            // border: "2px solid red",
            pt: 10,
            mt: 6
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              "&:hover": {
                rotate: "360deg",
                transition: "0.5s",
                color: "#ff9800",
              },
            }}
            onClick={toggleDrawer("right", false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "full screen menu",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
            { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
            {
              mainLink: "user account",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "vendor account",
              subLinks: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((element) => {
            return (
              <Accordion
                elevation={0}
                sx={{ bgcolor: "initial" }}
                key={element.mainLink}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {element.mainLink}
                </AccordionSummary>
                <AccordionDetails>
                  <List sx={{ py: 0, my: 0 }}>
                    {element.subLinks.map((link) => {
                      return (
                        <ListItem key={link} sx={{ m: 0, p: 0 }}>
                          <ListItemButton>
                            <ListItemText primary={link} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}

export default ThirdPart;
