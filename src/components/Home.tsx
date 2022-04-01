import Box from "@mui/material/Box";
import {myTheme} from "../styles/myTheme";

const Home = () => {
  return (
    <Box sx={{bgcolor: myTheme.light.background.primary, height: "100%"}}>
      Home component
    </Box>
  )
}

export default Home;