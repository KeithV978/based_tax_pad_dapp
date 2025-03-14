import * as React from "react";
import { Img, Ul, Wrapper } from "./styles";

import logo from "../../assets/images/logo.png";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
// import Telegram from "@mui/icons-material/Telegram";
// import X from "@mui/icons-material/X";
// import BookRounded from "@mui/icons-material/MenuBookOutlined";
import { Spiral as Hamburger } from "hamburger-react";
import { MobileNav } from "./mobileMenu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    setMenuOpen(event);
  };
  return (
    <React.Fragment>
      <HideOnScroll>
        <Wrapper>
          <Stack direction="row" alignItems="center">
            <Img src={logo} alt="logo" />
            <Link component="a" href="/" sx={{textDecoration: 'none', color: '#fff'}}>
            <Typography variant="h4" fontWeight={700}>
              Based Tax Pad
            </Typography>
            </Link>
          </Stack>

          <Box sx={{display: 'flex'}}>
            <Ul>
              <li>
                <Link href="#">
                  <Typography color="#fff"> My Tokens </Typography>
                </Link>
              </li> 
            </Ul>
            <div>
               {/*  */}
            </div>
            <Button
              variant="contained"
              href="#"
              sx={{
                backgroundColor: "primary.main",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                marginLeft: '1rem'
              }}
            >
              Create Token
            </Button>
          </Box>
          <Box sx={{ display: { sm: "none", xs: "block" } }}>
            <Hamburger
              easing="ease-in"
              rounded
              label="Mobile menu bar"
              direction="right"
              toggled={menuOpen}
              toggle={setMenuOpen}
            />
          </Box>
        </Wrapper>
      </HideOnScroll>
      <MobileNav toggleDrawer={toggleDrawer} menuOpen={menuOpen} />
    </React.Fragment>
  );
};
