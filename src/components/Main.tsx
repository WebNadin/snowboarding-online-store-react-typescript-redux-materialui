import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Box from "@mui/material/Box";

const NoPageFound =() => (<h1>no page found</h1>);

const Main = () => {
 return (
  <Box sx={{flex: "1 0 auto"}}>
    <HashRouter>
       <Routes>
           <Route index element={<Home />} />
           <Route path="products" element={<Products />} />
           <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} />
           <Route path="*" element={<NoPageFound />} />
       </Routes>
    </HashRouter>
  </Box>
 )
}

export default Main;