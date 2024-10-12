import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  Stack,
  Typography,
  Container,
  Box,
  IconButton,
  styled,
  alpha,
  InputBase,
  ListItem,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { ExpandMore } from "@mui/icons-material";




const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid blue solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border : '1px solid #777',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

const options = ["All Categories", "CAR", "Clothes", "Electronics"];
function SecondPart() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme()
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack alignItems={'center'}>
        <LocalMallOutlinedIcon sx={{color:'#ff9800'}}/>
        <Typography sx={{fontWeight:'bold'}}>Sales Shop</Typography>
      </Stack>

      <Search
        sx={{
          display: "flex",
          borderRadius: "15px",
          justifyContent: "space-between",
          flexGrow:0.5,
          my:2.5,
        }}
      >
        <SearchIconWrapper>
          <SearchIcon sx={{color:"#ff9800"}} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{width:'100%'}}
          
        />


        <div>
        <List
        component="nav"
        aria-label="Device settings"
         sx={{
              bgcolor:theme.palette.myColor.main,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 15,
              p: "0",
            }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{"&:hover": { cursor: "pointer" },}}
        >
          <ListItemText
            secondary={options[selectedIndex]}
            sx={{
              width:'90px',
                  textAlign: "center",
                  
                }}
          />
          <ExpandMore sx={{ fontSize: "16px" }} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{ fontSize: "13px" }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
        </div>
      </Search>

      <Box alignItems={"center"}>
        <IconButton aria-label="cart">
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartOutlinedIcon />
          </StyledBadge>
        </IconButton>
      </Box>
    </Container>
  );
}

export default SecondPart;
