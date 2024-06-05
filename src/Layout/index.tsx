import { ReactNode } from "react"
import { Box } from "@mui/material";

import { Colors } from "../constants/colors";

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{
      backgroundColor: Colors.primary01
    }}>
      
    </Box>
  );
};

export default Layout