import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Box } from '@mui/system';
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename={"/snowboarding"}>
      <Box sx={{display: "flex", flexDirection: "column", height: "100%"}}>
        <Header />
        <Main />
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

