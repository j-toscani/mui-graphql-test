import { Box } from "@mui/material";
import "./App.css";
import { Login } from "./pages/login";

function App() {
  return <Box sx={{display:"flex", justifyContent: "center", alignItems:"center", height:"100%"}}> <Login /> </Box>;
}

export default App;
