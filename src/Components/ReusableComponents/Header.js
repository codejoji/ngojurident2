import React, { useState, useEffect } from "react";
import logo from "../../assets/images/icons8-solidarity-64.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#e3e0ab",
}));

const Header = ({ userid }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matches2 = useMediaQuery(theme.breakpoints.down("sm"));
  const [entry, setEntry] = useState("");
  var nm = JSON.parse(sessionStorage.getItem("userid"));

  function handlecartclick() {
    alert("Cart Empty. Please login first");
  }
  return (
    <div className="headercontainer">
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img
            src={logo}
            id="logo"
            onClick={() => navigate("/")}
            style={{ marginLeft: "5px", height: "50px" }}
          ></img>
        </Box>
        {matches ? (
          ""
        ) : (
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box className="boxheader">
              <div onClick={() => navigate("/AboutUs")} className="headertags">
                About
              </div>
            </Box>
            <Box>
              <div onClick={() => navigate("/")} className="headertags">
                <a href="/#gallery">Gallery</a>
              </div>
            </Box>
            <Box>
              <div
                onClick={() => navigate("/ContactUs")}
                className="headertags"
              >
                Contact
              </div>
            </Box>
            <Box>
            <div className="headertags">
              Plant a tree
            </div>
          </Box>
          </Box>
        )}

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            margin: "10px",
            justifyContent: "center",
          }}
        >
          
          <Box
            style={{
              marginRight: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box className="rightheader">
              <ShoppingCartIcon
                onClick={() => {
                  nm ? navigate("/Cart") : handlecartclick();
                }}
                className="loginbuttonheader"
                style={{ color: "white", fontSize: "25px", display: "block" }}
              />
            </Box>
            <Box>
              <p
                className="loginbuttonheader"
                style={{ color: "white", marginTop: "2px", fontSize: "15px" }}
              >
                Cart
              </p>
            </Box>
          </Box>

          <Box style={{ marginRight: "5px" }}>
            <Box className="rightheader">
              <AccountCircleIcon
                className="loginbuttonheader"
                style={{ color: "white", fontSize: "20px" }}
              />
            </Box>
            <Box>
              <p
                className="loginbuttonheader"
                style={{ color: "white", marginTop: "2px", fontSize: "15px" }}
              >
                {nm ? "ACCOUNT" : "LOGIN"}
              </p>
            </Box>
          </Box>
          {matches2 ? (
            ""
          ) : (
            <Box style={{ marginRight: "10px" }}>
              <Box className="rightheader">
                <MenuIcon
                  onClick={() => navigate("/Menu")}
                  className="loginbuttonheader"
                  style={{ color: "white", fontSize: "23px", display: "block" }}
                />
              </Box>
              <Box>
                <p
                  onClick={() => navigate("/Menu")}
                  className="loginbuttonheader"
                  style={{ color: "white", marginTop: "2px", fontSize: "15px" }}
                >
                  Menu
                </p>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Header;
