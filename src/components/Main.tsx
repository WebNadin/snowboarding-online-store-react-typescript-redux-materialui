import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Box from "@mui/material/Box";

const Main = () => {
 return (
  <Box sx={{flex: "1 0 auto"}}>
       <Routes>
           <Route index element={<Home />} />
           <Route path="products" element={<Products />} />
           <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} />
       </Routes>
  </Box>
 )
}

export default Main;