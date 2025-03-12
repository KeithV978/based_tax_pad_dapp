import { styled } from "@mui/material";

export const Wrapper = styled("section")(({ theme }) => ({
  color: "#ccc",
  padding: ".5rem 1rem",
marginTop: '2rem',
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  // position: "sticky",
  // bottom: 0,
  // width: "100%",
  // zIndex: 100,
}));
export const LogoWrapper = styled("section")(({ theme }) => ({
  width: "100px",
}));
