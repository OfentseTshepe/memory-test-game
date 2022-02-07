import React from "react";
import { Box, Typography, Button, Tooltip } from "@mui/material"
import BrainIcon from "../Asssets/BrainIcon";
import { LinkedIn, GitHub } from "@mui/icons-material";

function Navbar() {

  return (
    <Box container sx={{ display: "flex", height: "70px", boxShadow:"0 2px 10px rgba(23, 105, 170,0.7)" , padding: "10px",borderBottom: "thin solid #1769aa" }} >
      <Box sx={{ height: "60px", width: "80px", borderRadius: "15%", alignContent: "center" }}>
        <BrainIcon height={60} width={70}  fill ={"rgb(23, 105, 170)"} />
      </Box>

      <Typography variant="h5" component="div" flexGrow={1} sx={{ pt: "15px" , color:"rgb(23, 105, 170)"}}>
        MEMORY TESTING GAME
      </Typography>
      <Tooltip title="View LinkedIn profile">
        <Button onClick={()=>{ window.open("https://www.linkedin.com/in/ofentse-tshepe/", "_blank")}} variant="outlined">
          <LinkedIn sx={{ fontSize: 40,color:"rgb(23, 105, 170)" }} />
        </Button>
      </Tooltip>
      <Tooltip title="Github repo">
        <Button onClick={()=>{ window.open("https://github.com/OfentseTshepe/memory-test-game", "_blank")}}  variant="outlined"  sx={{ ml: "10px", borderRadius: "5%", borderStyle: "solid" ,}}>
          <GitHub sx={{ fontSize: 40 ,color:"rgb(23, 105, 170)"}} />
        </Button>
      </Tooltip>
    </Box>

  );

}

export default Navbar;