import { AppBar, Toolbar } from "@mui/material"
import { Logo, NavigationLink } from "./shared";
import { useAuth } from "../context/AuthContext";

function Header() {
  const auth = useAuth();

  const ifUserIsLoggedIn = (
    <>
      <NavigationLink to="/chat" text="Chat" textColor="black" />
      <NavigationLink to="/" text="Logout" textColor="black" onClick={auth?.logout} />
    </>
  );

  const ifUserIsNotLoggedIn = (
    <>
      <NavigationLink to="/login" textColor="black" text="Login" />
      <NavigationLink to="/signup" textColor="black" text="Sign up" />
    </>
  )

  return (
    <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {
            (auth?.isLoggedIn)
              ? ifUserIsLoggedIn
              : ifUserIsNotLoggedIn
          }
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;