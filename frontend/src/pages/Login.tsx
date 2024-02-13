import { Box, Button, Typography } from "@mui/material";
import { CustomizedInput } from "../components/shared";
import { LoginOutlined } from "@ant-design/icons";


function Login() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  }

  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>

      </Box>
      <Box display={"flex"} flex={{ md: 0.5, sm: 1, xs: 1 }} justifyContent={'center'} alignItems={'center'} padding={2} ml={'auto'} mt={16}>
        <form onSubmit={handleSubmit} style={{ margin: "auto", padding: "30px", boxShadow: "10px 10px 20px", borderRadius: "10px", border: "none" }}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h4" fontWeight={600} padding={2} textAlign="center" color="black">Login</Typography>
            <CustomizedInput name="email" label="email" type="email" />
            <CustomizedInput name="password" label="password" type="password" />
            <Button type="submit" sx={{ px: 2, py: 1, mt: 2, width: "450px", borderRadius: 2, bgcolor: "black", color: "white", ":hover": { bgcolor: "grey" }, }} endIcon={<LoginOutlined />} >Login</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login;