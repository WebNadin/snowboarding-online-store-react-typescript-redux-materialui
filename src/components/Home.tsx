import Box from "@mui/material/Box";
import {myTheme} from "../styles/myTheme";
import Products from "./Products";

const Home = () => {
  return (
    <Box sx={{bgcolor: myTheme.light.background.secondary, height: "100%"}}>
      <Products />
    </Box>
  )
}

export default Home;