import Box from "@mui/material/Box";
import {myTheme} from "../styles/myTheme";

const Footer = () => {
  return (
    <Box sx={{flex: "0 0 auto", bgcolor: myTheme.dark.background.primary, color: myTheme.dark.text.secondary}}>
      Footer component
    </Box>
  )
}

export default Footer;