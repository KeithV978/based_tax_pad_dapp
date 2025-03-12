import * as React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import token_rewards from "../../assets/images/token rewards.jpg";
import solana from "../../assets/images/solana.jpg";
import buyback from "../../assets/images/buyback.jpg";
import burn_total from "../../assets/images/burn_total.jpg";
import reflection_rewards from "../../assets/images/reward.png";
import lucky_draw from "../../assets/images/lucky_draw.png";
 

const InputWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "2rem",
  [theme.breakpoints.up("sm")]: {
    width: "70%",
  },

  input: {
    width: "100%",
    padding: "1rem",
    borderRadius: "2rem",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "1rem",
    borderWidth: "1px",
    borderColor: "#fff",
  },
}));
const FlexWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  paddingTop: "2rem",
  gap: "2rem",
  justifyContent: "center",
  flexWrap: "wrap",
  "& > div": {
    // backgroundImage: `url('${cardbg}')`,
    // backgroundPosition: "center",
    backgroundColor: '#01020e',
    minWidth: "230px",
    minHeight: "400px",
    border: "1px solid #4d4d4d",
    borderRadius: "10px",
    textAlign: "center",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  "& > div > h4, & > div > h6": {
    margin: "2rem 0",
  },
  "div > img": {
    borderRadius: "15px",
    width: "200px",
  },
}));

export const Body = () => {
  return (
    <Box
      sx={{
        // backgroundImage: `url('${cardbg}')`,
        // backgroundPosition: "center",
        backgroudSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputWrapper>
        <input type="text" placeholder="Search Types..." />
      </InputWrapper>

      <FlexWrapper>
        {[
          {
            icon: solana,
            title: "SOL Rewards Hub",
            subtitle: "Earn solana rewards through our innovative...",
            live: true,
          },
          {
            icon: token_rewards,
            title: "Token Rewards",
            subtitle: "Participate in our tokens reward program...",
            live: false,
          },
          {
            icon: buyback,
            title: "Strategic Buyback",
            subtitle: "Our automated buyback mechanism helps...",
            live: false,
          },
          {
            icon: burn_total,
            title: "Token Burn Portal",
            subtitle: "Track our token burning event that reduce...",
            live: false,
          },
          {
            icon: reflection_rewards,
            title: "Reflection Rewards",
            subtitle: "Automatic reflection rewards for...",
            live: false,
          },
          {
            icon: lucky_draw,
            title: "lucky Draw Events",
            subtitle: " Participate in our regular lucky draw...",
            live: false,
          },
        ].map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.icon} alt={item.title} />
            </div>
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="h6">{item.subtitle}</Typography>

            {!item.live ? (
              <span
                style={{
                  borderRadius: "10px",
                  width: "60%",
                  border: "1px solid #fff",
                  color: "#fff",
                  padding: ".5rem 2rem",
                  margin: "0 auto",
                }}
              >
                Soon
              </span>
            ) : (
              <Button
                color="primary"
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  color: !item.live ? "#fff" : "#222222",
                  backgroundColor: !item.live ? "transparent" : "#fff",
                  padding: ".5rem 2rem",
                  width: "60%",
                  margin: "0 auto",
                }}
              >
                Create
              </Button>
            )}
          </div>
        ))}
      </FlexWrapper>
    </Box>
  );
};
