import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BlurOnRounded from "@mui/icons-material/BlurOnRounded";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
// import { DASH } from "../../utils/links";
import logo from "../../assets/images/logo/logo.png";

export const MobileNav = ({ menuOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={() => toggleDrawer(false)}>
      <Box
        sx={{ width: 250, height: "100vh", backgroundColor: "#222222" }}
        role="presentation"
        onClick={() => toggleDrawer(!menuOpen)}
        onKeyDown={() => toggleDrawer(!menuOpen)}
      >
        <Stack direction="row" alignItems="center">
          <img src={logo} alt="logo" style={{ width: "50px" }} />
          <Typography variant="h6" padding="1rem">
            <Link to="/" sx={{ color: "#fff" }}>
             Based Tax Pad
            </Link>
          </Typography>
        </Stack>
        <Divider />
        <List>
          {[
            { text: "My Tokens", icon: <BlurOnRounded />, link: "#" },
            { text: "Recent Tokens", icon: <BlurOnRounded />, link: "#" },
            { text: "Select Wallet", icon: <BlurOnRounded />, link: "#" },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link to={item.link} sx={{ color: "#fff" }}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ color: "#fff" }} primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
