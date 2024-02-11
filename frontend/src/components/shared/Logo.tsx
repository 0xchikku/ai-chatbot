import { Link } from "react-router-dom";
import { chatLogo } from "../../assets";
import { Typography } from "@mui/material";

function Logo() {
  return (
    <div style={{
      display: "flex",
      marginRight: "auto",
      alignItems: "center",
      gap: "15px"
    }}>
      <Link to={'/'} style={{ textDecoration: "none", display: "flex" }}>
        <img src={chatLogo} alt="chat-logo" width={'30px'} height={'30px'} className="chatLogo" />
        <Typography sx={{ display: { md: "block", sm: "none", xs: "none" }, ml: "5px", fontWeight: "800", color: "#05101c" }}>
          <span style={{ fontSize: "20px" }}>Chat</span>-Bot
        </Typography>
      </Link >
    </div >
  )
}

export default Logo;