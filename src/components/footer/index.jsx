import React from "react";
import { LogoWrapper, Wrapper } from "./styles";
import Typography from "@mui/material/Typography"; 
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Telegram from "@mui/icons-material/Telegram";
// import X from "@mui/icons-material/X";
import logo from "../../assets/images/logo.png";
import { Link } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Wrapper>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <LogoWrapper>
              <img src={logo} alt="logo" />
            </LogoWrapper>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              Based Tax Pad
            </Typography>
          </div>
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            An intuitive platform designed for individuals and corporations
          </Typography>
        </div>

        <ul style={{ display: "flex", gap: "1rem", listStyle: 'none'
         }}>
          {[
            { title: "Home", link: "/" },
            { title: "Create Token", link: "/" },
            { title: "My Tokens", link: "/" },
          ].map((item, index) => (
            <Link href={item.link} key={index}>
              <Typography component="li" color="#fff">{item.title}</Typography>
            </Link>
          ))}
        </ul>
      </Wrapper>
      <br />
      <br />
      <Divider sx={{ borderColor: "rgba(250, 255, 255, .1)" }} />
      <Box sx={{ padding: "2rem 0", textAlign: "center" }}>
        <Typography variant="body2" fontWeight={600}>
          © {new Date().getFullYear()} Based Tax Pad. All Rights Reserved
        </Typography>
      </Box>
    </>
  );
};
