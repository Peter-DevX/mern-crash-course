import { Box } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "../src/components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {

  // const bg = useColorMode("gray.100", "gray.900");
  return (
    <Box minH={"100vh"} >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
