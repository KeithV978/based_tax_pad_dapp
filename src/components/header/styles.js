import { styled } from "@mui/material";

export const Wrapper = styled("header")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  marginBottom: "2rem",
  padding: "1rem .5rem",
  position: "sticky",
  top: "0px",
  backgroundColor: "#01020e",
  zIndex: 1000,
  borderRadius: '25px',
  [theme.breakpoints.up("sm")]: {
    padding: "1rem",
  },
}));
export const Img = styled("img")(({ theme }) => ({
  width: "30px",
  marginRight: "5px",
  [theme.breakpoints.up("sm")]: {
    width: "50px",
  },
}));
export const Ul = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // minWidth: "220px",
    listStyle: "none",
    border: "1px solid #fff",
    borderRadius: "25px",
    padding: ".5rem 1rem",
    "& li": {
      color: "#fff",
    },
  },
}));
